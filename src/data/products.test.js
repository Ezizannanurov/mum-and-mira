import { describe, expect, it } from 'vitest'
import { products } from './products'

describe('product imagery', () => {
  it('assigns a distinct local image to every candle', () => {
    const images = products.map((product) => product.image)

    expect(new Set(images).size).toBe(products.length)
    images.forEach((image) => expect(image).toMatch(/^\/images\//))
  })

  it('contains the five real candles at the agreed per-item prices', () => {
    expect(products.map(({ id, price }) => ({ id, price }))).toEqual([
      { id: 'herbal-beeswax', price: 149 },
      { id: 'colored-tapers', price: 59 },
      { id: 'wormwood-cleanse', price: 179 },
      { id: 'money-candle', price: 159 },
      { id: 'black-wax', price: 69 },
    ])
  })

  it('localizes every product in Russian, English, and Turkish', () => {
    products.forEach((product) => {
      ;['ru', 'en', 'tr'].forEach((language) => {
        expect(product.name[language]).toBeTruthy()
        expect(product.notes[language]).toBeTruthy()
        expect(product.description[language]).toBeTruthy()
        expect(product.alt[language]).toBeTruthy()
      })
    })
  })
})
