export type PropsStack = {
    Cadastrar: undefined;
    StackHome: undefined
    EditProfile:undefined
}

export type PropsTabs = {
    TabsHome: undefined;
    TabsProfile: undefined
    TabsSettings: undefined
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends PropsStack {}
        interface RootParamList extends PropsTabs {}
    }
}