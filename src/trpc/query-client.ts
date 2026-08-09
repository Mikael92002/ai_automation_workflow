import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from '@tanstack/react-query';
// import superjson from 'superjson';
 
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: { // like serializing JSON (JSON.stringify)
        // serializeData: superjson.serialize, // allows access to javascript Map, Set, Date, etc.
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
      hydrate: { // like deserializing json (JSON.parse)
        // deserializeData: superjson.deserialize,
      },
    },
  });
}