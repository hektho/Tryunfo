# Tryunfo
Repositório referente ao projeto Tryunfo

# Objetivo do projeto
Este projeto permite a criação de cartas do famoso jogo "Super Trunfo", podendo ser adicionadas ao baralho ou excluídas. Possui também, um filtro de busca de cartas existentes no baralho.

# Funcionalidades

O projeto contém ao seu lado esquerdo da tela um forms que possibilita o usuário alterar o conteúdo da carta ao seu modo. Conforme a carta é editada, é mostrado ao usuário um "preview", uma prévia da carta.

Abaixo, no projeto, há um "Filtro de busca", que permite filtrar as cartas desejadas.

O formulário é constituído por 8 campos para modificação da carta e um botão para salvar a carta. Sendo eles: 
- Nome da carta: permite o usuário adicionar um nome a carta;
- Descrição: permite inserir uma breve descrição da carta;
- Campo de atributo de força: permite a inserção de pontos de força;
- Campo de atributo de fogo: permite a inserção de pontos de fogo;
- Campo de atributo de magia: permite a inserção de pontos de magia;
- URL da imagem: permite inserir uma URL(externa) de uma imagem;
- Raridade da carta: um campo do tipo 'select' que permite a escolha de tipos de raridade da carta;
- Super trunfo: permite adicionar a carta o 'Super trunfo';

- O campo de nome da carta aceita até 50 caracteres;
- O campo descrição da carta aceita até 200 caracteres;
- Só é possível distribuir 210 pontos entre os atributos;
- Só é possível adicionar uma carta 'Super Trunfo';

## Botão de salvar:
O botão só será ativado se:

- Os campos, nome da carta, descrição e URL não estiverem vazios;
- Os campos de atributos somados não ultrapassarem 210 pontos;
- Os campos de atributos individuais não ultrapassarem 90 pontos;

## Filtro de busca

- O campo de filtro 'Nome da carta' permite filtrar pelo nome da carta;
- O campo de raridade permite filtrar pela raridade da carta;
- O campo de 'Super Trunfo' permite filtrar pela carta Super Trunfo


