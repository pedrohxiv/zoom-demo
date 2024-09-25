# Projeto Demo Zoom

## Descrição do Projeto

Este projeto é um clone do Zoom, uma das plataformas de videoconferência mais populares, desenvolvido utilizando as últimas tecnologias como Next.js, TypeScript e Tailwind CSS. Com este clone, os usuários podem se autenticar, criar reuniões, e acessar várias funcionalidades, incluindo gravação, compartilhamento de tela e gerenciamento de participantes.

## Principais Funcionalidades

- **Autenticação:** Utiliza Clerk para oferecer múltiplas opções de autenticação, garantindo segurança para o usuário.

- **Nova Reunião:** Permite criar uma nova reunião, com opções de configuração da câmera e do microfone.

- **Controles de Reunião:** Ferramentas para controle total, como gravação, reações com emojis, compartilhamento de tela, ajuste de som, e visualização de lista de participantes.

- **Sair da Reunião:** Opção de sair da reunião a qualquer momento ou finalizar para todos se for o organizador.

- **Agendamento de Reuniões:** Agende reuniões futuras com data e hora, acessíveis na página de "Próximas Reuniões".

- **Lista de Reuniões Anteriores:** Acesse um histórico completo de reuniões passadas com detalhes.

- **Gravação de Reuniões:** Acesse gravações de reuniões passadas para revisão ou referência.

- **Sala Pessoal:** Cada usuário tem uma sala pessoal com um link único para reuniões rápidas.

- **Participação via Link:** Fácil ingresso em reuniões através de um link compartilhável.

- **Funcionalidades em Tempo Real:** Todas as interações são seguras e acontecem em tempo real, mantendo a integridade dos dados.

- **Design Responsivo:** O design adapta-se perfeitamente a diferentes tamanhos de tela.

## Dependências

O projeto utiliza diversas dependências para garantir seu funcionamento suave:

- `@clerk/nextjs`: ^5.5.2,
- `@radix-ui/react-dialog`: ^1.1.1,
- `@radix-ui/react-dropdown-menu`: ^2.1.1,
- `@radix-ui/react-slot`: ^1.1.0,
- `@radix-ui/react-toast`: ^1.2.1,
- `@stream-io/node-sdk`: ^0.4.1,
- `@stream-io/video-react-sdk`: ^1.3.5,
- `class-variance-authority`: ^0.7.0,
- `clsx`: ^2.1.1,
- `lucide-react`: ^0.436.0,
- `next`: 14.2.6,
- `react`: ^18,
- `react-datepicker`: ^7.3.0,
- `react-dom`: ^18,
- `tailwind-merge`: ^2.5.2,
- `tailwindcss-animate`: ^1.0.7,
- `@types/node`: ^20,
- `@types/react`: ^18,
- `@types/react-dom`: ^18,
- `postcss`: ^8,
- `tailwindcss`: ^3.4.1,
- `typescript`: ^5,

## Como Executar o Projeto

1. Clone este repositório em sua máquina local.
2. Certifique-se de ter o Node.js e o npm (ou yarn) instalados.
3. Instale as dependências do projeto utilizando o seguinte comando:

```bash
npm install
# ou
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto com as seguintes chaves e seus respectivos valores:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=seu_valor_aqui
CLERK_SECRET_KEY=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_IN_URL=seu_valor_aqui
NEXT_PUBLIC_CLERK_SIGN_UP_URL=seu_valor_aqui
NEXT_PUBLIC_STREAM_API_KEY=seu_valor_aqui
STREAM_SECRET_KEY=seu_valor_aqui
NEXT_PUBLIC_BASE_URL=seu_valor_aqui
```

Certifique-se de substituir `seu_valor_aqui` pelos valores corretos de cada chave.

5. Inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run dev
# ou
yarn dev
```

6. Acesse a aplicação em `http://localhost:3000` e explore as funcionalidades completas do Zoom Demo e adapte-as conforme suas necessidades específicas.
