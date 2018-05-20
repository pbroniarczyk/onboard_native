import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	stepContainer: {
		flex: 1
	},
	step: {
		backgroundColor: "#FFFFFF",
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		padding: 20
	},
	row: {
		flexDirection: "row"
	},
	headline: {
		color: "black",
		fontSize: 23,
		fontWeight: "bold"
	},
    text: { 
        color: "#95989a"
	},
	input: {
		width: 300
	},

	// Step3 - career paths
	path: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#e5e5e5"
	},
		
	path__title: {
		display: "flex",
	},

	path__title_checked: {
		display: "flex",
		color: "#0388d1",
	},

	path__checked: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#0388d1",
	}
});