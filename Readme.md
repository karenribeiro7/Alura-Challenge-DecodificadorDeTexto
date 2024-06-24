# Projeto Decodificador de Texto

## Visão Geral
O Projeto Decodificador de Texto é uma aplicação web projetada para decodificar um conjunto específico de textos codificados de volta à sua forma original. Esta aplicação tem como alvo textos codificados onde certas vogais são substituídas por códigos específicos. É uma ferramenta simples, mas eficaz, para decodificar mensagens que foram codificadas usando esse esquema predefinido.

![Tela inicial](/assets/imagens/telaZero.jpg)

## Funcionalidades
- **Criptografar um Texto:** Decodifica textos a partir de um padrão pré-definido, substituindo certas vogais por códigos específicos.

    ![Primeira Tela](/assets/imagens/primeiraTela.jpg)

    ![Segunda Tela](/assets/imagens/segundaTela.jpg)

- **Copiar o texto gerado pela aplicação:** Possui botão de copiar que já copia o resultado da criptografia ou descriptografia.

    ![Terceira Tela](/assets/imagens/terceiraTela.jpg)

- **Descriptografar um texto:** A aplicação pode reverter a criptografia executada anteriormente.

    ![Quarta Tela](/assets/imagens/quartaTela.jpg)

    ![Quinta Tela](/assets/imagens/quintaTela.jpg)


## Como Funciona
A aplicação lê o texto de entrada e verifica a presença de códigos específicos. Se algum desses códigos for encontrado, ele é substituído pelas suas vogais correspondentes. O processo continua até que todo o texto tenha sido decodificado.

## Uso
- **Inserir Texto Codificado:** Os usuários podem inserir o texto que desejam decodificar na área de texto fornecida.
- **Decodificar:** Ao clicar no botão "Criptografar" ou "Descriptografar", a aplicação processa o texto de entrada, decodifica-o e exibe o texto original.
- **Copiar texto**: Ao clicar no botão "Copiar", o texto gerado é colocado na área de transferência do usuário.

## Detalhes Técnicos
- A aplicação é construída usando HTML, CSS e JavaScript.
- Utiliza técnicas de manipulação de strings para buscar substrings específicas (códigos) e substituí-las pelas suas vogais correspondentes.

## Melhorias Futuras
- Design mais responsivo
- Suporte a Mais Códigos: Versões futuras podem incluir a capacidade de decodificar códigos adicionais.