import { Text, View } from 'react-native';
import Pusher from 'pusher-js';
import { useEffect } from 'react';
// import { Buffer } from 'buffer';
// window.Pusher = Pusher;


try {
  let id = '1590'
  console.log(id)
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
      <Text>Hello</Text>

      <Text>Hello</Text>

      <Text>Hello</Text>

      <Text>Hello</Text>

      <Text>Hello</Text>


    </View>
  );
}














// import { Text, View } from 'react-native';
// import { useEffect } from 'react';

// // import MyComponent from './MyComponent';

// import {
//   Pusher,
//   PusherMember,
//   PusherChannel,
//   PusherEvent,
// } from '@pusher/pusher-websocket-react-native';

  
//   // (channelName, data)=>{
//   //     console.log('Message')
//   // }
 

//       // var channel = pusher.subscribe("chat-channel");

// // import {Pusher} from '@pusher/pusher-websocket-react-native';

// // import {
// //   Pusher,
// //   PusherMember,
// //   PusherChannel,
// //   PusherEvent,
// // } from '@pusher/pusher-websocket-react-native';

// // const pusher = new Pusher('bff5058d89d1b8f2490b', {
// //       cluster: 'mt1',
// //     });
    
// //     pusher.init({
// //       apiKey: "bff5058d89d1b8f2490b",
// //       cluster: "mt1"
// //     });

// //     pusher.connect();


//     // const channel = pusher.subscribe('chat-channel');

//   // channel.bind('message-' + id, function (data) {
//   //   console.log('bind data: ' , data);
//   // });

//   // pusher.subscribe({
//   //   channelName: "chat-channel", 
//   //   onEvent: (event: PusherEvent) => {
//   //     console.log(`Event received: ${event}`);
//   //   }
//   // });

// // const channel = pusher.in

// // const pusher = Pusher.getInstance();

  
    
//   // await pusher.connect();
//   // await pusher.subscribe({
//   //   channelName: "chat-channel", 
//   //   onEvent: (event: PusherEvent) => {
//   //     console.log(`Event received: ${event}`);
//   //   }
//   // });

// // import Pusher from 'pusher-js/react-native';

// // import {Pusher} from 'pusher-js';

// // await pusher.connect();

// // try {
// //   let id = '1590'
  
// //   const pusher = new Pusher('bff5058d89d1b8f2490b', {
// //     cluster: 'mt1',
// //   });
// //   const channel = pusher.subscribe('chat-channel');
// //   channel.bind('message-' + id, function (data) {
// //     console.log('bind data: ' , data);
// //   });
// // } catch(error) {
// //   console.log(error)
// // }

// export default function App() {
  
//   // console.log('Pusher in in APP')
//   const pusher = Pusher.getInstance();

//   pusher.init({
//     apiKey:"bff5058d89d1b8f2490b",
//     cluster:"mt1",
//     onSubscriptionSucceeded:(channelName, data)=>{}
//   });

//   pusher.connect();
//   Pusher.logToConsole = true;

//   const channel = pusher.subscribe({
//     channelName: "chat-channel",
//     onSubscriptionSucceeded:(channelName, data)=>{
//       // console.log('On Subscription Succeeded',channelName,data)
//     },
//     onSubscriptionError:(error)=>{
//       // console.log('On Subscription Error')
//     },
//     onEvent: (event) => {
//       // console.log(`Event received: ${event}`);
//       // console.log("Event");
//     },
//   });

//   // console.log(channel)

//   // channel.bind('my-event', function(data) {
//   //   console.log('Received my-event with message: ' + data.message);
//   // });

//   function onEvent(event) {
//     console.log("onEvent: $event");
//   }

//   function onSubscriptionSucceeded(channelName, data) {
//     console.log(`onSubscriptionSucceeded: ${channelName} data: ${data}`);
//   }


//   useEffect(()=>{


//     // var pusher = new Pusher("bff5058d89d1b8f2490b",{
//     //   cluster:"mt1"
//     // });
    
//     // var channel = pusher.subscribe('chat-channel');
    
//     // channel.bind("message-1590", (data) => {
//     //   console.log('Data is = ', data)
//     //   // add new price into the APPL widget
//     // });

//   })
// //   const pusher = Pusher.getInstance();

// //  pusher.init({
// //   apiKey: "bff5058d89d1b8f2490b",
// //   cluster: "mt1"
// // });

//   useEffect(() => {
//     Pusher.log = (msg) => {
//       console.log("Annay wa log: " + msg);
//     };
//   },[])  

//   return (
//     <View>
//       <Text>
//         Hello World
//       </Text>
//     </View>

//     // <MyComponent />
//   );
// }
