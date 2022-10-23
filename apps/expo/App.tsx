import { Provider } from 'core/provider'
import { View, Text } from 'native-base'

export default function App() {
  return (
    <>
      <Provider>
        <View flex={1} justifyContent='center' alignItems='center'>
          <Text fontSize={24}>Hey! (Test workspace build)</Text>
        </View>
      </Provider>
    </>
  )
}
