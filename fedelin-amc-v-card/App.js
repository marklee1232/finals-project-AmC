import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Linking, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const handleAddressPress = () => {
    Linking.openURL('https://www.google.com/maps/place/391+Ilang-Ilang+Street,+Santa+Mesa,+Maynila,+Kalakhang+Maynila/@14.5994677,121.01817,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c9da1ef167c5:0x7fa231424edfb1a5!8m2!3d14.5994625!4d121.0207449?entry=ttu');
  };
  
  const handleCalendarPress = () => {
    const eventData = {
      title: 'Appointment',
      startDate: new Date('2023-06-01T14:00:00'),
      endDate: new Date('2023-06-01T15:00:00'),
    };

    const eventUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventData.title}&dates=${eventData.startDate.toISOString().replace(/[-:]/g, '')}/${eventData.endDate.toISOString().replace(/[-:]/g, '')}&location=391+ilang-ilang st+Sta.mesa manila&details=Appointment+at+391+ilang-ilang st.+ Sta. mesa manila`;

    Linking.openURL(eventUrl);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://lakewood.edu/wp-content/uploads/2024/02/A-laptop-with-an-IT-related-code-running-placed-on-a-desk.png' }}
        style={styles.coverImage}
      />

      <Image
        source={{ uri:'https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/346858491_6437347329666859_6506460755497139040_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRudIvs_njrbG4iz-rwLapC-ytJYutfjkL7K0li61-OSuXtsHxxlwJTVa8Q5shiILA_gAh3cnrmIclU5a5oNLC&_nc_ohc=ym1RLNDxfPAQ7kNvgHioJMp&_nc_ht=scontent.fmnl9-4.fna&oh=00_AYDAm7ffV06-h8zOOPnRjxNAut9o_CCK9welekmXK85jNQ&oe=66494B5A' }}
        style={styles.profileImage}
      />

      <Text style={styles.nameText}>Mark Lee Fedelin</Text>

      <Text style={styles.bioText}>I'm taking Bachelor Science Information Technology at Global Reciprocal Colleges.Detail-oriented and proactive Information Technology IT student with a passion for technology and a strong foundation in programming, network administration, and cybersecurity. Possesses exceptional problem-solving skills and a keen ability to learn and adapt to new technologies rapidly.</Text>
 <View style = {styles.titleContainer}>
      <Text style={styles.sectionTitle}>Contact Information </Text>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>📞</Text>
          <Text style={styles.infoText}>09613831281</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoIcon}>✉️</Text>
           <TouchableOpacity onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/?hl=en-GB#inbox')}>
            <Text style={styles.infoText}>fedelinmarklee@gmail.com</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.infoItem}>
           <Icon name="facebook" style={styles.infoIcon} />
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/marklee.fedelin.96')}>
            <Text style={styles.infoText}>Mark Fedelin</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoItem}>
          <Icon name= "instagram" style={styles.infoIcon} />
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/markfeds15/')}>
            <Text style={styles.infoText}>markfeds15</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoItem}>
         <Icon name="home" style={styles.infoIcon} />
          <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/391+Ilang-Ilang+Street,+Santa+Mesa,+Maynila,+Kalakhang+Maynila/@14.5994677,121.01817,17z/data=!3m1!4b1!4m5!3m4!1s0x3397c9da1ef167c5:0x7fa231424edfb1a5!8m2!3d14.5994625!4d121.0207449?entry=ttu')}>
            <Text style={styles.infoText}>391 ilang-ilang st sta. Mesa Manila</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.separatedInfoBox}>
      <View style = {styles.titleContainer}>
        <Text style={styles.sectionTitle}>Travel Blogs </Text>
        </View>
        <View style={styles.pictureGrid}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpae_AUgir1DVGphfphMKgdkSxbEymfenVgIac4h6iw&s' }}
            style={styles.picture}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8LU7MBS9iPgz07O7ZzJFFQKW-fhefQA0jw&s' }}
            style={styles.picture}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzLgGjc6-sl9p2aiCEKLzl3ZQEEx3nWneyZOo-lbN2Q&s' }}
            style={styles.picture}
          />
          <Image
            source={{ uri: 'https://eazytraveler.net/wp-content/uploads/2023/01/banton-romblon-travel-guide-scaled.jpg' }}
            style={styles.picture}
          />
          
        </View>
      </View>


      <View style={[styles.infoBox, { backgroundColor: 'lightgray', marginTop:30 }]}>
        <View style={styles.infoItem}>
         <Icon name="home" style={{ color: 'brown', fontSize: '24px' }} />
          <Text style={[styles.infoText, { color: 'blue', textDecorationLine: 'underline' }]} onPress={handleAddressPress}>
            391 ilang-ilang st. sta. Mesa Manila
          </Text>
        </View>
        <TouchableOpacity style={styles.infoItem} onPress={handleCalendarPress}>
          <Text style={styles.infoIcon}>📅</Text>
          <Text style={[styles.infoText, { color: 'blue', textDecorationLine: 'underline' }]}>Add to Calendar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactForm}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius:100,
    marginTop: -80,
    borderWidth: 3,
    borderColor: 'black',
  },
  nameText: {
    fontWeight:'bold',
    fontSize: 20,
    marginVertical: 10,
    color: 'black',
    fontStyle: 'italic'
  },
  bioText: {
    fontSize: 10,
    margin:10,
    color: 'black',
    textAlign:'center'
  },
  infoBox: {
    backgroundColor:'lightgray',
      flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: 10,
    borderRadius:10
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    flexGrow:1,
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 10,
    color: 'blue',
  },
  infoText: {
    fontSize: 12,
    color: 'black',
  },
  separatedInfoBox: {
    backgroundColor: 'lightgray',
    padding:10,
    borderRadius: 10,
    marginTop: 20,
    width: '95%',
    alignItems: 'center',
  },
  pictureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  picture: {
    width: 125,
    height: 100,
    borderRadius: 10,
    borderWidth:  2,
     borderColor:'skyblue',
    margin: 5,
  },
  contactForm: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  sectionTitle:{
    margin:10,
   fontWeight: 'bold',
   textAlign:'center',
   fontFamily:'italic'
 
  },
  titleContainer: {
    backgroundColor:'gray',
    width:200,
    borderRadius:30,
    margin:10,

  }
});

