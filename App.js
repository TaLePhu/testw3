import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewCircle}>

      </View>

      <View style={styles.view1}>
        <Text style={styles.txtView1}>GROW</Text>
        <Text style={styles.txtView1}>YOUR BUSSINESS</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.txtView2}>We will help you to grow your business using</Text>
        <Text style={styles.txtView2}>online server</Text>
      </View>

      <View style={styles.view3}>
        {/* <Button title='Log in'/>
        <Button title='Sign up'/> */}
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}> 
          <Text style={styles.txtBtn}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00CCF9',
    padding: 20
  },
  viewCircle: {
    marginTop: 25,
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: '#000000'
  },
  view1: {
    flex: 1,
    alignItems: 'center',
  },
  txtView1: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  view2: {
    flex: 1,
    alignItems: 'center'
  },
  txtView2: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  view3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 25
  },
  btn: {
    backgroundColor: '#E3C000',
    width: 120,
    height: 48,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
