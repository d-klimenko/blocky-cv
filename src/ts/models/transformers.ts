import { type Jsonable, type Repeatable, type RepeatableFlattened, Transformer } from '../types'
import { Contact, contactDefinitions } from './contact'

class ContactsTransformer extends Transformer {
  public toJsonable (contacts: Contact[]): Array<[string, string]> {
    const result: Array<[string, string]> = []
    for (const contact of contacts) {
      result.push([contact.shape.type, contact.value])
    }
    return result
  }

  public fromJsonable (contact: Array<[string, string]>): Contact[] {
    const result: Contact[] = []
    for (const [type, value] of contact) {
      if (!(type in contactDefinitions)) {
        throw new Error(`Unknown contact type ${type}`)
      }
      result.push(new Contact(contactDefinitions[type], value))
    }
    return result
  }
}

class RepeatablesTransformer extends Transformer {
  public toJsonable (repeatables: Repeatable[]): RepeatableFlattened[] {
    return repeatables.map(repeatable => [repeatable.title, repeatable.items])
  }

  public fromJsonable (jsonable: RepeatableFlattened[]): Repeatable[] {
    return jsonable.map(repeatable => ({
      title: repeatable[0],
      items: repeatable[1]
    }))
  }
}

export class DataTransformer {
  private readonly transformers: Record<string, Transformer> = {
    contacts: new ContactsTransformer(),
    repeatables: new RepeatablesTransformer()
  }

  public toJson (data: Record<string, unknown>): Record<string, Jsonable> {
    const result: Record<string, Jsonable> = {}
    for (const [key, value] of Object.entries(data)) {
      if (key in this.transformers) {
        result[key] = this.transformers[key].toJsonable(value)
      } else {
        result[key] = value as Jsonable
      }
    }
    return result
  }

  public fromJson (data: Record<string, Jsonable>): Record<string, unknown> {
    const result: Record<string, unknown> = data
    for (const [key, value] of Object.entries(data)) {
      if (key in this.transformers) {
        result[key] = this.transformers[key].fromJsonable(value)
      }
    }
    return result
  }
}
