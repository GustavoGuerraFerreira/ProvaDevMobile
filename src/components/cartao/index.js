import { View, Image, Text, Button } from "react-native";
import styles from "./style";

export default function Cartao(props) {

    const uri = props.uri
    return (
        <View style={styles.container}>
            <View style={styles.ViewImagem}>
                <Image
                    style={styles.poster}
                    source={{
                        uri: uri
                    }}
                />
            </View>
            <View style={styles.ViewDados}>
                <Text>Nome do item:{props.name}</Text>
                <Text>Poder de ataque:{props.ataque}</Text>
                <Text>Defesa: {props.defesa}</Text>
                <Text>Durabilidade: {props.durabilidade}</Text>
                <Button style = {styles.btnTrocar}title="Trocar" />
            </View>
        </View>
    )
}

