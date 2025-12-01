import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = {
  primary: "#5D4037",      
  primaryDark: "#3E2723",  
  primaryLight: "#D7CCC8", 
  
  accent: "#0097A7",         
  accentLight: "#B2EBF2",
   
  white: "#FFFFFF",
  background: "#FAFAFA",     
  surface: "#FFFFFF",       
   
  lightGray: "#F5F5F5",
  gray: "#9E9E9E",
  darkGray: "#424242",
  text: "#212121",         
   
  border: "#E0E0E0",
  borderLight: "#EEEEEE",
   
  success: "#388E3C",        
  error: "#D32F2F",      
  warning: "#F57C00",       
  
  shadowLight: "rgba(0,0,0,0.08)",
  shadowMedium: "rgba(0,0,0,0.12)",
};

const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.md,
  },

  header: {
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.lg,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.shadowMedium,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: Platform.OS === "android" ? 4 : 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: SPACING.lg,
  },
  
  headerText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
 
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
    marginBottom: SPACING.md,
    marginTop: SPACING.md,
  },
 
  form: {
    backgroundColor: COLORS.surface,
    padding: SPACING.lg,
    borderRadius: 12,
    width: "100%",
    maxWidth: 450,
    alignSelf: "center",
    shadowColor: COLORS.shadowMedium,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: Platform.OS === "android" ? 3 : 0,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },
 
  label: {
    color: COLORS.darkGray,
    fontWeight: "500",
    marginBottom: SPACING.xs,
    fontSize: 14,
    marginTop: SPACING.sm,
  },
 
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: COLORS.white,
    color: COLORS.text,
  },
 
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.md,
    shadowColor: COLORS.shadowMedium,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: Platform.OS === "android" ? 3 : 0,
  },
 
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
 
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginTop: -SPACING.sm,
    marginBottom: SPACING.sm,
    marginLeft: SPACING.xs,
  },
 
  inputError: {
    borderColor: COLORS.error,
    backgroundColor: "#FFEBEE",
  },
 
  messageContainer: {
    padding: SPACING.md,
    borderRadius: 8,
    marginBottom: SPACING.md,
  },

  successContainer: {
    backgroundColor: "#E8F5E9",
    borderLeftWidth: 4,
    borderLeftColor: COLORS.success,
  },

  errorContainer: {
    backgroundColor: "#FFEBEE",
    borderLeftWidth: 4,
    borderLeftColor: COLORS.error,
  },
});

export default styles;