import { useCallback, useEffect, useId, useRef, useState } from 'react'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

function isValidEmailFormat(value) {
  const t = value.trim()
  if (!t) return false
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)
}

export default function RequestModal({ open, onClose, copy, companyEmail }) {
  const titleId = useId()
  const firstFieldRef = useRef(null)
  const prevOpenRef = useRef(false)

  const [step, setStep] = useState('form')
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [serviceValue, setServiceValue] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [consent, setConsent] = useState(false)

  const accessKey = String(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '').trim()

  const resetForm = useCallback(() => {
    setName('')
    setPhone('')
    setEmail('')
    setServiceValue('')
    setAddress('')
    setDescription('')
    setConsent(false)
  }, [])

  const handleClose = useCallback(() => {
    resetForm()
    setStep('form')
    setErrorMsg('')
    onClose()
  }, [onClose, resetForm])

  useEffect(() => {
    if (open && !prevOpenRef.current) {
      setStep('form')
      setErrorMsg('')
      setSubmitting(false)
      const t = setTimeout(() => firstFieldRef.current?.focus(), 50)
      prevOpenRef.current = true
      return () => clearTimeout(t)
    }
    if (!open) {
      prevOpenRef.current = false
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, handleClose])

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMsg('')

    if (!accessKey) {
      setErrorMsg(copy.requestModalConfigError)
      return
    }

    if (!consent) {
      setErrorMsg(copy.requestModalConsentError)
      return
    }

    const phoneDigits = phone.replace(/\D/g, '')
    if (phoneDigits.length !== 10) {
      window.alert(copy.requestModalPhoneInvalid)
      return
    }

    const emailTrim = email.trim()
    if (!isValidEmailFormat(emailTrim)) {
      window.alert(copy.requestModalEmailInvalid)
      return
    }

    const serviceLabel =
      copy.requestServiceOptions.find((o) => o.value === serviceValue)?.label ?? serviceValue

    const message = [
      `${copy.requestModalEmailServiceLine}: ${serviceLabel}`,
      `${copy.requestModalEmailAddressLine}: ${address.trim() || '—'}`,
      '',
      `${copy.requestModalEmailDetailsLine}:`,
      description.trim(),
      '',
      `${copy.requestModalEmailPhoneLine}: ${phoneDigits}`,
      '',
      `${copy.requestModalEmailCompanyLine}: ${companyEmail}`,
    ].join('\n')

    setSubmitting(true)

    try {
      const payload = {
        access_key: accessKey,
        subject: `${copy.requestModalEmailSubjectPrefix} ${serviceLabel}`,
        from_name: name.trim(),
        email: emailTrim,
        replyto: emailTrim,
        phone: phoneDigits,
        message,
      }

      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data.success) {
        throw new Error(data.message || copy.requestModalErrorGeneric)
      }

      setStep('success')
      resetForm()
    } catch (err) {
      setErrorMsg(err.message || copy.requestModalErrorGeneric)
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose()
      }}
    >
      <div
        className="modal-panel card"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal-header">
          <h2 id={titleId} className="modal-title">
            {step === 'form' ? copy.requestModalTitle : copy.requestModalSuccessTitle}
          </h2>
          <button
            type="button"
            className="modal-close"
            onClick={handleClose}
            aria-label={copy.requestModalClose}
          >
            ×
          </button>
        </div>

        {step === 'form' && (
          <form className="request-form" onSubmit={handleSubmit} noValidate>
            <p className="modal-lead">{copy.requestModalLead}</p>

            <label className="form-label form-label-required">
              <span className="form-label-heading">{copy.requestModalName}</span>
              <input
                ref={firstFieldRef}
                className="form-input"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="form-label form-label-required">
              <span className="form-label-heading">{copy.requestModalPhone}</span>
              <input
                className="form-input"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>

            <label className="form-label form-label-required">
              <span className="form-label-heading">{copy.requestModalEmail}</span>
              <input
                className="form-input"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="form-label">
              <span className="form-label-heading">{copy.requestModalService}</span>
              <select
                className="form-input"
                name="service"
                required
                value={serviceValue}
                onChange={(e) => setServiceValue(e.target.value)}
              >
                <option value="">{copy.requestModalServicePlaceholder}</option>
                {copy.requestServiceOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-label">
              <span className="form-label-heading">{copy.requestModalAddress}</span>
              <input
                className="form-input"
                name="address"
                type="text"
                autoComplete="street-address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>

            <label className="form-label">
              <span className="form-label-heading">{copy.requestModalDescription}</span>
              <textarea
                className="form-input form-textarea"
                name="description"
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span className="form-hint">{copy.requestModalDescribePhotosHint}</span>
            </label>

            <label className="form-check">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
              />
              <span>{copy.requestModalConsent}</span>
            </label>

            {errorMsg ? <p className="form-error">{errorMsg}</p> : null}

            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                {copy.requestModalCancel}
              </button>
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? copy.requestModalSubmitting : copy.requestModalSubmit}
              </button>
            </div>

            <p className="form-fine">
              {copy.requestModalFine.replace('{email}', companyEmail)}
            </p>
          </form>
        )}

        {step === 'success' && (
          <div className="modal-success">
            <p className="modal-success-text">{copy.requestModalSuccessBody}</p>
            <button type="button" className="btn btn-primary" onClick={handleClose}>
              {copy.requestModalDone}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
