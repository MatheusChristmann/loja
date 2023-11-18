import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Form = ({ getClientes, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const cliente = ref.current;

            cliente.nome.value = onEdit.nome;
            cliente.data_nascimento.value = onEdit.data_nascimento;        
            cliente.fone = onEdit.fone;
            cliente.email.value = onEdit.email;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cliente = ref.current;

        if (
            !cliente.nome.value ||
            !cliente.data_nascimento.value ||            
            !cliente.fone.value ||
            !cliente.email.value 
        ) {
            return toast.warn("Preencha todos os campos!");
        }

        if (onEdit) {
            await axios
            .put("http://localhost:8800/" + onEdit.id, {
                nome: cliente.nome.value,
                data_nascimento: cliente.data_nascimento.value,                
                fone: cliente.fone.value,
                email: cliente.email.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));            
        } else {
            await axios
            .post("http://localhost:8800", {
                nome: cliente.nome.value,
                data_nascimento: cliente.data_nascimento.value,                
                fone: cliente.fone.value,
                email: cliente.email.value,
            })
            .then(({ data }) => toast.success(data))
            .catch(({ data }) => toast.error(data));                
        }

        cliente.nome.value = "";
        cliente.data_nascimento.value = "";
        cliente.fone.value = "";
        cliente.email.value = "";

        setOnEdit(null);
        getClientes();
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>            
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>Email</Label>
                <Input name="email" type="email" />
            </InputArea>
            <InputArea>
                <Label>Data Nascimento</Label>
                <Input name="data_nascimento" type="date" />
            </InputArea>            
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone" />
            </InputArea>            

            <Button type="submit">SALVAR</Button>
        </FormContainer>
    )
}

export default Form;