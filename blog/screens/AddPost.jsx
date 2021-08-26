import * as React from "react"
import { useEffect, useState } from "react"
import { Button, SafeAreaView, StyleSheet, TextInput, Text } from "react-native"

const styles = StyleSheet.create({
	login: {
		marginTop: 50,
		marginBottom: 10,
		marginLeft: 20
	},
	input: {
		marginLeft: 20,
		marginRight: 20,
		borderWidth: 1,
		padding: 10,
		top: 0
	},
	button: {
		display: "none"
	}
  });

const AddPost = () => {

	const [post, setPost] = useState("")

	return (
		
		<SafeAreaView>
			<Text style={styles.login}>Ajouter un post :</Text>

			<TextInput
				multiline
				numberOfLines={5}
				onChangeText={text => setPost(text)}
				style={styles.input}
				value={post}
				placeholder="Message"
			/>

			<Button
				style={styles.button}
				title="Poster le message"
				onPress={() => Alert.alert('Button with adjusted color pressed')}
			/>
		</SafeAreaView>
	)
}

export default AddPost
