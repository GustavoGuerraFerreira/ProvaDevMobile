import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cartao from './src/components/cartao';

export default function App() {
  return (
    <View style={styles.container}>
     <Cartao
     name= " Espada de Diamante"
     ataque= " 200"
     defesa = " 0"
     durabilidade = " 10"
     uri= "https://w7.pngwing.com/pngs/921/675/png-transparent-minecraft-pocket-edition-pokemon-diamond-and-pearl-diamond-sword-swords-angle-text-symmetry.png"/>

     <Cartao
      name= " Escudo"
      ataque= " 0"
      defesa = " 200"
      durabilidade= " 300"
      uri= "https://2.bp.blogspot.com/-bpmqxktsrFw/Uy3ETRC4MgI/AAAAAAAAAm0/zvaymYQIMto/s1600/Iron_Shield_SK+(1).png"/>
     
     
     <Cartao
      name= " Arco"
      ataque= " 500"
      defesa = " 0"
      durabilidade= " 400"
      uri= "https://i.pinimg.com/originals/d0/e8/cc/d0e8cc1b2fd978e9db6999ef76f70008.jpg"/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
