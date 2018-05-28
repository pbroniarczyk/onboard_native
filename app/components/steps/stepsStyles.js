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
	},

	// Step4 - skills
	autocomplete_wrapper: {
		display: "flex"
	},
	
	autocomplete_btn: {
		width: 70
	},

	skill_cloud: {
		flexWrap: "wrap",
		marginBottom: 30,
		width: 300,
		minHeight: 65,
		maxHeight: 90,
		overflow: "hidden",
		position: "relative"
	},
	
	skillcloud_item: {
		fontSize: 12,
		display: "flex",
		borderColor: "#E5E5E5",
		borderRadius: 3,
		padding: 5,
		color: "#404040",
		marginRight: 5,
		marginBottom: 6,
	},
	
	skill_counter: {
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},
	
	skill_wrapper: {
		display: "flex",
		flexWrap: "wrap",
	},
	
	skill: {
		backgroundColor: "#E5E5E5",
		width: 120,
		display: "flex",
		height: 28,
		marginBottom: 7,
		marginRight: 7,
		borderColor: "#E5E5E5",
		borderRadius: 3,
	},
	
	skill_full: {
		width: 120,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 28,
		marginBottom: 7,
		marginRight: 7,
		borderRadius: 3,

		backgroundColor: "#0388d1",
		borderColor: "#0388d1",
	},

	addedSkill: {
		color: "#FFFFFF"
	}
})