export interface Pokemon {
  name: string,
  height: number,
  id: number,
  sprites: Sprites,
  types:[]
  weight: number

}

export interface Sprites {
  front_default: string
}
