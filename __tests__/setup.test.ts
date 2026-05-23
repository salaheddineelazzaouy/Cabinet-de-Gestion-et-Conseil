import { describe, it, expect } from 'vitest'

describe('Vitest setup', () => {
  it('should run tests successfully', () => {
    expect(true).toBe(true)
  })

  it('should support jest-dom matchers', () => {
    const element = document.createElement('div')
    element.textContent = 'Hello'
    document.body.appendChild(element)
    expect(element).toBeInTheDocument()
    document.body.removeChild(element)
  })
})
