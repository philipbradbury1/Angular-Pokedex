export interface Pokemon{
  name: string,
  height: number,
  id: number,
  sprites: Sprites,
  types:Array<Types>,
  weight: number
}

export interface Sprites {
  front_default: string
}

export interface Types {
  slot: number | undefined,
  type: { name: string | undefined, url: String | undefined} | undefined
}
