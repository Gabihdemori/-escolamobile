import { Dimensions, StyleSheet, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

// Paleta profissional alternativa (sem azul)
const COLORS = {
  primary: "#2E7D32",       // Verde escuro sofisticado
  primaryLight: "#4CAF50",  // Verde mais claro
  primaryDark: "#1B5E20",   // Verde mais escuro
  secondary: "#5D4037",     // Marrom elegante
  accent: "#009688",        // Turquesa
  
  background: "#F5F7FA",    // Fundo claro
  surface: "#FFFFFF",       // Superfícies
  card: "#FFFFFF",         // Cards
  
  text: "#212121",         // Texto principal
  textSecondary: "#616161", // Texto secundário
  textLight: "#FFFFFF",    // Texto claro
  
  border: "#E0E0E0",       // Bordas
  borderLight: "#EEEEEE",  // Bordas claras
  
  success: "#388E3C",      // Verde sucesso
  error: "#D32F2F",        // Vermelho erro
  warning: "#F57C00",      // Laranja alerta
  
  overlay: "rgba(0,0,0,0.2)", // Overlay
  
  // Tons neutros
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",
};

// Espaçamento consistente
const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// Função para fontes responsivas
const scaleFont = (size: number): number => Math.round(size * (width / 375));

const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'ios' ? Math.max(height * 0.06, 60) : Math.max(height * 0.04, 40),
    paddingHorizontal: SPACING.md,
  },

  // Header fixo
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  
  headerTitle: {
    color: COLORS.textLight,
    fontSize: scaleFont(18),
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  // Info do professor
  professorInfo: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: SPACING.sm + 2,
    paddingVertical: SPACING.xs + 2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },

  professorInfoText: {
    color: COLORS.textLight,
    fontSize: scaleFont(14),
    fontWeight: "500",
  },

  // Botão de logout
  logoutButton: {
    backgroundColor: COLORS.textLight,
    paddingHorizontal: SPACING.sm + 4,
    paddingVertical: SPACING.xs + 2,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },

  logoutText: {
    color: COLORS.primary,
    fontSize: scaleFont(13),
    fontWeight: "600",
  },

  // Dashboard Header
  dashboardHeader: {
    marginTop: SPACING.lg,
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    borderRadius: 12,
    alignItems: "center",
    elevation: 2,
    shadowColor: COLORS.primaryDark,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  dashboardTitle: {
    fontSize: scaleFont(20),
    color: COLORS.textLight,
    fontWeight: "700",
    marginBottom: SPACING.xs,
    textAlign: "center",
  },

  dashboardSubtitle: {
    fontSize: scaleFont(15),
    color: "rgba(255, 255, 255, 0.85)",
    marginVertical: SPACING.sm,
    textAlign: "center",
    lineHeight: 20,
  },

  // Botão cadastrar turma
  cadastrarTurmaButton: {
    backgroundColor: COLORS.textLight,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: 25,
    marginTop: SPACING.sm,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  cadastrarTurmaText: {
    color: COLORS.primary,
    fontSize: scaleFont(14),
    fontWeight: "700",
  },

  // Seção de turmas
  turmasSection: {
    marginTop: SPACING.lg,
    padding: SPACING.lg,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },

  turmasTitle: {
    fontSize: scaleFont(18),
    fontWeight: "700",
    color: COLORS.primary,
    marginBottom: SPACING.md,
    textAlign: "center",
    paddingBottom: SPACING.xs,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary + "20",
  },

  // Cabeçalho da tabela
  turmaHeader: {
    flexDirection: "row",
    backgroundColor: COLORS.gray50,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.sm,
    borderRadius: 8,
    marginBottom: SPACING.xs,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  headerId: {
    flexBasis: "15%",
    textAlign: "center",
    minWidth: 40,
    fontWeight: "700",
    color: COLORS.gray800,
    fontSize: scaleFont(13),
  },

  headerNome: {
    flex: 1,
    textAlign: "center",
    minWidth: 100,
    fontWeight: "700",
    color: COLORS.gray800,
    fontSize: scaleFont(13),
  },

  headerAcoes: {
    flexBasis: "30%",
    textAlign: "center",
    minWidth: 100,
    fontWeight: "700",
    color: COLORS.gray800,
    fontSize: scaleFont(13),
  },

  // Linha da turma
  turmaRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gray50,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.sm,
    borderRadius: 8,
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },

  turmaId: {
    flexBasis: "15%",
    textAlign: "center",
    minWidth: 40,
    fontWeight: "600",
    color: COLORS.gray700,
    fontSize: scaleFont(13),
  },

  turmaNome: {
    flex: 1,
    textAlign: "center",
    minWidth: 100,
    color: COLORS.text,
    fontSize: scaleFont(14),
    fontWeight: "500",
  },

  // Container dos botões de ação
  acoesContainer: {
    flexBasis: "30%",
    flexDirection: "row",
    justifyContent: "center",
    minWidth: 100,
  },

  // Botão ver detalhes
  verDetalhes: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.xs + 2,
    paddingHorizontal: SPACING.sm,
    borderRadius: 6,
    marginRight: SPACING.xs,
    flex: 1,
    maxWidth: 90,
    alignItems: "center",
  },

  // Botão deletar turma
  deletarTurma: {
    backgroundColor: COLORS.error,
    paddingVertical: SPACING.xs + 2,
    paddingHorizontal: SPACING.sm,
    borderRadius: 6,
    flex: 1,
    maxWidth: 90,
    alignItems: "center",
  },

  // Texto dos botões
  buttonText: {
    color: COLORS.textLight,
    fontWeight: "600",
    fontSize: scaleFont(12),
  },

  // Estado vazio
  emptyState: {
    paddingVertical: SPACING.xl,
    alignItems: "center",
  },

  emptyStateText: {
    color: COLORS.gray600,
    fontSize: scaleFont(15),
    textAlign: "center",
    marginTop: SPACING.sm,
  },

  // Loading state
  loadingContainer: {
    paddingVertical: SPACING.xl,
    alignItems: "center",
  },

  // Modal styles (opcional)
  modalOverlay: {
    flex: 1,
    backgroundColor: COLORS.overlay,
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.lg,
    width: width * 0.85,
    maxWidth: 400,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
});

export default styles;
export { COLORS, SPACING }; // Exportando constantes para uso em outros lugares