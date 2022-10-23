import { NavigationProvider } from './navigation'
import { NativeBaseProvider } from 'native-base'
import { QueryClient, QueryClientProvider } from "react-query"
import { Platform } from 'react-native';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
});

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <>
          <NativeBaseProvider isSSR={Platform.OS === 'web'}>
            <>{children}</>
          </NativeBaseProvider>
        </>
      </NavigationProvider>
    </QueryClientProvider>
  )
}
