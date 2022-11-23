import { Text, View } from 'react-native';
import Pusher from 'pusher-js';
import { useEffect } from 'react';

try {
  let id = '1590'
  
  const pusher = new Pusher('bff5058d89d1b8f2490b', {
    cluster: 'mt1',
  });
  const channel = pusher.subscribe('chat-channel');
  channel.bind('message-' + id, function (data) {
    console.log('bind data: ' , data);
  });
} catch(error) {
  console.log(error)
}

export default function App() {
  useEffect(() => {
    Pusher.log = (msg) => {
      console.log("Annay wa log: " + msg);
    };
  },[])  

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
