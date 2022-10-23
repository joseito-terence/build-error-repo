import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import config from '../../config'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [
            Linking.createURL('/'),
            `${config?.APP_URL}/`
          ],
          config: {
            initialRouteName: 'App',
            screens: {
              'App': '',
              'user-detail': 'user/:id',
              'GetStarted': '/GetStarted',
              'ForgotPassword': '/forgot-password',
              'Discovery': '/p/:id/:slug?',
              'Discoveries': '/discoveries',
              'Curations': '/curations',
              'User': '/u/:username',
              'DeactivateAccount': '/deactivate-account',
              'DeleteAccount': '/delete-account',
              'Curation': '/l/:id/:slug',
              'Location': '/places/:id/:slug',
              'AddToCuration': '/addtocuration/:discoveryId',
              'login': '/login/:token?',
              'SignUpRequest': '/signup-request'
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
