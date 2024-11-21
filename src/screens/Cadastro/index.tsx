import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as yup from "yup";
import { saveUser } from "./functions/saveUser";
import { styles } from "./style";

export const Cadastro = () => {
  const [loading, setLoading] = useState<any>();
  const [error, setError] = useState<any>();
  const [success, setSuccess] = useState<any>();

  const Campos = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 caracteres"),
  });

  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Campos),
  });

  const save = (x: any) => {
    saveUser(x, setLoading, setError, setSuccess);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.tituloPrincipal}> Cadastro </Text>

        <>
          <Text style={styles.textInput}>Nome:</Text>
          <Controller
            name="nome"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Digite o nome"
              />
            )}
          />
          {errors?.nome && (
            <Text style={{ color: "red" }}>{errors?.nome?.message}</Text>
          )}
        </>

        <>
          <Text style={styles.textInput}>Email:</Text>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Digite o email"
              />
            )}
          />
          {errors?.email && (
            <Text style={{ color: "red" }}>{errors?.email?.message}</Text>
          )}
        </>

        <>
          <Text style={styles.textInput}>Senha:</Text>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.inputs}
                onChangeText={(value) => onChange(value)}
                value={value}
                placeholder="Digite sua senha"
                secureTextEntry={true}
              />
            )}
          />
          {errors?.password && (
            <Text style={{ color: "red" }}>{errors?.password?.message}</Text>
          )}
        </>

        <TouchableOpacity
          style={styles.buttonFinalizar}
          onPress={handleSubmit(save)}
        >
          <Text style={styles.textButtonFinalizar}>FINALIZAR</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
