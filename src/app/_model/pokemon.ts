export interface Pokemon{
  name: string,
  height: number,
  id: string,
  sprites: Sprites,
  types:Array<Types>,
  weight: number,
  species: Species,
  results: any
  Description: Description,
  flavor_text_entries: Array<TextEntries>
}

export interface Description {
  flavor_text_entries: Array<TextEntries>,
  id: string
}

export interface Sprites {
  front_default: string,
  back_default: string
}

export interface Types {
  slot: number | undefined,
  type: { name: string | undefined, url: String | undefined} | undefined
}

export interface Species {
  url: string
}

export interface TextEntries {
  flavor_text: string | undefined,
  language: {name: string},
}
