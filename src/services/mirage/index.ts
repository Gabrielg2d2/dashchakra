import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User fake ${i}`
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        }
      })
    },

    seeds(server) {
      server.createList('user', 20)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users') // Shorthands MirageJs
      this.post('/users')

      this.namespace = '' //evita prejudicar as rotas "api do next, apiroutes"
      this.passthrough()
    }
  })

  return server
}
