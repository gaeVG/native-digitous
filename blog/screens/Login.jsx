import * as React from "react"
import { useEffect, useState } from "react"
import { Alert, Button, SafeAreaView, StyleSheet, TextInput, Text } from "react-native"

const styles = StyleSheet.create({
	view: {
		marginTop: 50,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30
	},
	input: {
		height: 40,
		borderWidth: 1,
		marginTop: 10,
		marginBottom: 10,
		padding: 10,
	},
  });

const Login = props => {

	const [username, onChangeUsername] = useState("")

	const logUser = () => {

		const checkUser = async () => {

			let fetchUsers =await fetch("https://jsonplaceholder.typicode.com/users")
			fetchUsers = await fetchUsers.json()
			
			fetchUsers.map(user => {

				username === user.username
				?
					props.onLogin(true)
				:
					null
			})
		}

		checkUser()
	}

	return (
		
		<SafeAreaView style={styles.view}>
			<Text >Login :</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeUsername}
				value={username}
				placeholder="Nom d'utilisateur"
			/>
			<Button
				style={styles.button}
				title="Connexion"
				onPress={logUser}
			/>
		</SafeAreaView>
	)
}

export default Login
