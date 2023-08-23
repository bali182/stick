export type Manufacturer = {
  id: string
  name: string
  description: string
}

export type Model = {
  id: string
  name: string
  description: string
}

export type Pickup = {
  
}

export type BridgeType = 'FIXED' | 'TREMOLO'

export type Bridge = {
  id: string
  name: string
  type: BridgeType
  description: string
  manufacturer: Manufacturer
}

export type ElectricGuitar = {
  id: string
  description: string
  scaleLength: number
  year: number

  model: Model
  manufacturer: Manufacturer
  bridge: Bridge
}
