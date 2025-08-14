export type RootStackParamList = {
  Home: undefined;
  StatusManager: { newOrder?: any }; // ✅ Allow passing new orders
  CodeSavedScreen: { code: string };
};
