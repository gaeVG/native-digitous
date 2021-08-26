import * as React from "react"
import { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native"

const styles = StyleSheet.create({
	login: {
		marginTop: 50,
		marginBottom: 10,
		marginLeft: 20
	},
	input: {
		height: 40,
		marginLeft: 20,
		marginRight: 20,
		borderWidth: 1,
		padding: 10,
	},
  });

const Login = () => {

	const [username, onChangeUsername] = useState("")

	return (
		
		<SafeAreaView>
			<Text style={styles.login}>Login :</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeUsername}
				value={username}
				placeholder="Nom d'utilisateur"
			/>
		</SafeAreaView>
	)
}

export default Login
