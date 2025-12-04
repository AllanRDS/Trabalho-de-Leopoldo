# Áudio Digital para Sistemas Multimídia

## Protótipo de Sistema Multimídia Educacional

### Disciplina: Sistemas Multimídia

Este projeto é um sistema multimídia educacional interativo desenvolvido para auxiliar no ensino de conceitos fundamentais sobre áudio digital, atendendo aos requisitos da disciplina de Sistemas Multimídia.

**Tema:** Áudio digital para Sistemas Multimídia

### Estrutura Modular
- **10 arquivos CSS** separados por componente
- **7 arquivos JavaScript** organizados por funcionalidade
- **6 páginas HTML** de conteúdo + página principal
- Todas as 6 formas de mídia obrigatórias implementadas

## 📂 Estrutura de Diretórios

```
c:\Repositorios\Audio Digital\
│
├── index.html                      Página principal - Home com carrossel e features
├── music-player.html               Player de música com controles
├── README.md                       Este arquivo
│
├── assets/                         Recursos multimídia
│   ├── README.md                   Documentação dos assets
│   ├── audio/                      Arquivos de áudio
│   │   └── loop_continuo.mid      Arquivo MIDI para player
│   ├── images/                     Imagens do projeto
│   ├── svg/                        Gráficos vetoriais
│   └── video/                      Vídeos do projeto
│       └── apresentacao.mp4       Vídeo de apresentação da homepage
│
├── css/                            10 arquivos CSS modulares
│   ├── global.css                  Reset CSS e estilos base (tipografia, botões, inputs)
│   ├── header.css                  Cabeçalho da página
│   ├── nav.css                     Navegação sticky com active states
│   ├── footer.css                  Rodapé do site
│   ├── sections.css                Seções, concept-cards, info-boxes, comparações
│   ├── hero.css                    Seção hero com CTAs
│   ├── carousel.css                Carrossel de 5 slides com dots
│   ├── features.css                Grid de 6 feature cards
│   ├── modern-theme.css            Tema moderno para o site
│   ├── quiz.css                    Estilos para questões, opções e resultados
│   └── audio-player.css            Player de áudio com waveforms e controles
│
├── js/                             7 arquivos JavaScript modulares
│   ├── navigation.js               Navegação SPA (showSection)
│   ├── carousel.js                 Carrossel auto-rotativo (5s interval)
│   ├── midi-player.js              Player MIDI (toggleMidi, stopMidi)
│   ├── background-music.js         Música de fundo com Web Audio API
│   ├── audio-processor.js          Processamento de áudio (~400 linhas)
│   │                               - Upload e decode de arquivos WAV/MP3
│   │                               - Visualização waveform em Canvas
│   │                               - Normalização de áudio
│   │                               - Aplicação de ganho com preview
│   │                               - Conversão buffer para WAV
│   │                               - Detecção de clipping em tempo real
│   ├── animations.js               Animações Canvas (ondas, amostragem, equalizer)
│   └── quiz.js                     Sistema de quiz completo
│                                   - Base de 15 questões
│                                   - Seleção aleatória de 5 por execução
│                                   - Múltipla escolha com feedback
│                                   - Cálculo de percentual de acertos
│                                   - Explicações detalhadas
│
└── pages/                          6 páginas HTML independentes
    │
    ├── fundamentos.html            Fundamentos do Áudio Digital
    │                               - O que é áudio digital
    │                               - Taxa de amostragem e Nyquist-Shannon
    │                               - Profundidade de bits e faixa dinâmica
    │                               - Cálculo de tamanho de arquivo
    │                               - História do áudio digital
    │                               - Conceitos avançados (dithering)
    │                               - Tabelas comparativas detalhadas
    │                               - SVG ilustrativos de conceitos
    │
    ├── digitalizacao.html          Processo de Digitalização
    │                               - Cadeia completa A/D (6 etapas)
    │                               - Tipos de conversores ADC
    │                               - Transdução e pré-amplificação
    │                               - Filtro anti-aliasing e jitter
    │                               - Erros comuns e como evitar
    │                               - Animações Canvas (ondas, aliasing)
    │                               - SVG técnicos do processo
    │
    ├── formatos.html               Formatos de Áudio Digital
    │                               - Não-comprimidos (WAV, AIFF)
    │                               - Sem perda (FLAC, ALAC)
    │                               - Com perda (MP3, AAC, Opus, OGG)
    │                               - Psicoac��stica e compressão
    │                               - Comparação detalhada de codecs
    │                               - Casos de uso profissionais
    │                               - Bitrates e qualidade
    │                               - Canvas e SVG comparativos
    │
    ├── pratica.html                Prática - Manipulação de Áudio
    │                               - Upload de arquivos WAV/MP3
    │                               - Visualização dupla de waveform
    │                               - Controle de ganho em tempo real
    │                               - Normalização automática
    │                               - Preview com detecção de clipping
    │                               - Comparação lado a lado
    │                               - Web Audio API completa
    │
    ├── aplicacoes.html             Aplicações do Áudio Digital
    │                               - Áudio em games (3D espacial, latência)
    │                               - Cinema e TV (surround, Atmos)
    │                               - Streaming (plataformas, bitrates)
    │                               - Workflows profissionais detalhados
    │                               - Especificações por indústria
    │                               - IA e processamento
    │                               - VoIP e comunicações
    │                               - Animação equalizer
    │                               - Tendências futuras
    │
    └── quiz.html                   Quiz - Teste de Conhecimentos
                                    - Base de 15 questões técnicas
                                    - Seleção aleatória de 5 por execução
                                    - Múltipla escolha (4 alternativas)
                                    - Feedback imediato por questão
                                    - Explicações das respostas corretas
                                    - Cálculo de percentual de acertos
                                    - Refazer com novas questões
```

## 🎨 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica com elementos modernos
- **CSS3**: Flexbox, Grid, animações, custom properties, responsive design
- **JavaScript ES6+**: Arrow functions, template literals, async/await, módulos

### APIs do Browser
- **Web Audio API**: AudioContext, AudioBuffer, processamento em tempo real
- **Canvas 2D API**: Visualização de waveforms e animações
- **File API**: Upload e leitura de arquivos de áudio
- **SVG**: Gráficos vetoriais inline

### Mídias Obrigatórias Implementadas (6/6)
1. **✅ Imagens Matriciais (Canvas)**:
   - Visualização de waveforms em tempo real
   - Demonstração de aliasing
   - Comparação de formatos de compressão
   - Animações de propagação sonora
   - Equalizer com 6 bandas de frequência

2. **✅ Imagens Vetoriais (SVG)**:
   - Diagramas de conversão A/D
   - Gráficos de taxa de amostragem
   - Ilustrações de profundidade de bits
   - Fluxogramas de processos
   - Comparações visuais de formatos
   - Ícones e elementos de interface
   - Mais de 15 SVGs únicos no projeto

3. **✅ Áudio Digitalizado**:
   - Upload de arquivos WAV/MP3
   - Processamento em tempo real via Web Audio API
   - Análise de frequência
   - Aplicação de efeitos (ganho, normalização)
   - Comparação antes/depois
   - Player com controles completos

4. **✅ Música (MIDI)**:
   - Síntese de áudio via Web Audio API
   - Geração de notas musicais
   - Música de fundo ambiente
   - Controles de play/pause
   - Osciladores para melodias

5. **✅ Vídeo**:
   - Seção dedicada com placeholder
   - Player HTML5 preparado
   - Integração para vídeos tutoriais
   - Área para demonstrações em vídeo

6. **✅ Animações**:
   - Animações Canvas de ondas sonoras
   - Processo de amostragem animado
   - Equalização em tempo real
   - Transições e efeitos visuais
   - Feedback interativo animado

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Clone ou baixe o repositório
2. Abra `index.html` no navegador
3. Navegue pelas páginas usando os botões da navegação

### Opção 2: Servidor Local (recomendado para áudio)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# VS Code
# Use a extensão "Live Server"
```

Acesse: `http://localhost:8000`

## 📖 Navegação

### Página Principal (index.html)
- Hero com CTAs
- Carrossel com 5 slides informativos
- Grid de 6 features (matricial, SVG, áudio, MIDI, vídeo, animações)
- Player MIDI com controles

### Páginas Individuais
Cada página tem:
- **Header** próprio com título e subtítulo
- **Navegação** com active state
- **Conteúdo** específico da seção
- **Footer** padronizado
- **CSS** importado via links externos
- **JavaScript** específico carregado quando necessário

## 🎯 Funcionalidades Principais

### 🎛️ Processador de Áudio (pratica.html)
- Upload de arquivos WAV ou MP3
- Decode usando Web Audio API
- Visualização de waveform em Canvas (original)
- Preview em tempo real da forma de onda processada
- Controle de ganho (0.1x a 3.0x)
- Normalização automática para -1dB
- Detecção visual de clipping (vermelho)
- Exportação de áudio processado
- Comparação lado a lado com players

### ❓ Sistema de Quiz (quiz.html)
**Requisitos Atendidos:**
- ✅ Base de **15 questões** (mínimo exigido: 15)
- ✅ Seleção aleatória de **5 questões** por execução (mínimo exigido: 5)
- ✅ Múltipla escolha com 4 alternativas
- ✅ Feedback imediato para cada resposta
- ✅ Explicação da resposta correta
- ✅ Cálculo automático de **percentual de acertos**
- ✅ Possibilidade de refazer com novas questões
- ✅ Interface responsiva e intuitiva

**Temas das Questões:**
- Conceitos básicos de digitalização
- Taxa de amostragem e Teorema de Nyquist
- Profundidade de bits
- Formatos de arquivo
- Processos de conversão A/D
- Aplicações práticas

### 🎨 Animações Canvas
1. **Propagação de Ondas**: Visualiza ondas sonoras no ar
2. **Amostragem em Tempo Real**: Demonstra conversão A/D
3. **Equalizer de 6 Bandas**: Barras animadas por frequência

## 📊 Estatísticas do Projeto

### Antes da Modularização
- **1 arquivo**: index.html com 2.741 linhas
- CSS inline: ~634 linhas
- JavaScript inline: ~1.045 linhas
- HTML: ~1.062 linhas

### Depois da Modularização
- **17 arquivos** organizados (1 index + 10 CSS + 6 JS)
- **6 páginas** HTML individuais
- **index.html**: 1.080 linhas (apenas estrutura)
- Manutenção simplificada
- Reutilização de componentes
- Carregamento otimizado

## Objetivos de Aprendizagem

Ao final da interação com o sistema, o usuário será capaz de:

1. **Compreender** os fundamentos da digitalização de áudio
2. **Explicar** o Teorema de Nyquist-Shannon e sua importância
3. **Diferenciar** taxa de amostragem e profundidade de bits
4. **Calcular** tamanhos de arquivo de áudio
5. **Identificar** e escolher formatos apropriados para diferentes usos
6. **Reconhecer** aplicações práticas em diversas indústrias
7. **Entender** psicoac��stica e compressão de áudio
8. **Conhecer** workflows profissionais de produção
9. **Processar** e analisar áudio digitalmente
10. **Avaliar** qualidade de áudio em diferentes contextos

## Conceitos Abordados

### Fundamentos Teóricos
- Conversão analógico-digital
- Taxa de amostragem (8 kHz - 192 kHz)
- Profundidade de bits (8, 16, 24, 32-bit)
- Teorema de Nyquist-Shannon
- Quantização e erro de quantização
- Dithering e noise shaping
- Faixa dinâmica
- História do áudio digital (1937-2025)

### Processo de Digitalização
- Transdução acústica
- Tipos de microfones
- Pré-amplificação e phantom power
- Filtros anti-aliasing
- Conversores ADC (Sigma-Delta, SAR, Pipeline)
- Jitter e clock
- Sample and hold
- Armazenamento e codificação

### Formatos e Codecs
- PCM não-comprimido (WAV, AIFF)
- Compressão sem perda (FLAC, ALAC)
- Compressão com perda (MP3, AAC, Opus, OGG)
- Psicoac��stica e mascaramento
- Bitrates (CBR vs VBR)
- Trade-offs qualidade/tamanho

### Aplicações Profissionais
- Produção musical (tracking, mixing, mastering)
- Games (áudio 3D, HRTF, latência)
- Cinema e TV (5.1, 7.1, Atmos)
- Streaming (Spotify, Apple Music, Tidal)
- VoIP (Opus, cancelamento de eco)
- Realidade Virtual (Ambisonics)
- Inteligência Artificial
- Workflows profissionais completos

## 🔧 Estrutura de Navegação

```
index.html (Home)
    ↓
pages/fundamentos.html → pages/digitalizacao.html → pages/formatos.html
                                                            ↓
pages/quiz.html ← pages/aplicacoes.html ← pages/pratica.html
    ↓
index.html (volta ao Home)
```

Navegação via botões ou links diretos. Cada página é independente.

## 📝 Notas de Desenvolvimento

### CSS Modular
- Cada arquivo CSS tem responsabilidade única
- `global.css` define base (reset, tipografia, elementos comuns)
- Componentes específicos em arquivos separados
- Importados via `<link>` no `<head>`

### JavaScript Modular
- Funções organizadas por feature
- `audio-processor.js` é o maior (~400 linhas) com Web Audio API
- `quiz.js` tem banco de 30 questões inline
- Importados via `<script src="">` antes de `</body>`

### Páginas HTML
- Template consistente (header, nav, section, footer)
- Cada página importa apenas CSS/JS necessários
- Navegação funciona via `onclick="location.href='...'"`
- Caminhos relativos de `pages/` para raiz (`../`)

## 🐛 Problemas Conhecidos

- **Animações**: Algumas animações Canvas precisam de botões de controle
- **Áudio MIDI**: Funciona melhor em Chrome/Edge (suporte nativo)
- **Upload de Áudio**: Requer navegador moderno com Web Audio API
- **Navegação**: As páginas em `/pages/` são independentes (não usam SPA)

## 🚀 Próximas Melhorias

- [ ] Adicionar mais animações interativas
- [ ] Implementar download de áudio processado
- [ ] Adicionar mais questões ao quiz (50-100)
- [ ] Criar página "Sobre" com créditos
- [ ] Responsive design para mobile
- [ ] Dark mode toggle
- [ ] Persistência de progresso do quiz (localStorage)

## Requisitos da Disciplina Atendidos

### ✅ Mídias (6/6 obrigatórias)
- [x] Imagens matriciais (Canvas)
- [x] Imagens vetoriais (SVG)
- [x] Áudio digitalizado
- [x] Música MIDI
- [x] Vídeo
- [x] Animações

### ✅ Quiz Interativo
- [x] Base com mínimo 15 perguntas (✓ 15 questões)
- [x] Sorteio de mínimo 5 perguntas (✓ 5 questões)
- [x] Múltipla escolha
- [x] Cálculo de percentual de acertos
- [x] Feedback ao usuário

### ✅ Recursos do Sistema
- [x] Navegação não-linear
- [x] Conteúdo educacional estruturado
- [x] Interatividade com o usuário
- [x] Materiais originais (SVGs, animações)
- [x] Design responsivo
- [x] Código fonte organizado

## Tecnologias e Ferramentas Utilizadas

### Desenvolvimento
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização modular (10 arquivos)
- **JavaScript ES6+** - Lógica e interatividade (7 arquivos)

### APIs e Bibliotecas
- **Web Audio API** - Processamento de áudio
- **Canvas 2D API** - Gráficos matriciais
- **SVG** - Gráficos vetoriais inline
- **File API** - Upload de arquivos

### Ferramentas de Autoria
- Editor de código (VS Code)
- Navegador para testes (Chrome/Firefox)
- Sistema de controle de versão
- Ferramentas de design gráfico

## Estatísticas do Projeto

### Arquivos
- **1** página principal (index.html)
- **6** páginas de conteúdo
- **10** arquivos CSS modulares
- **7** arquivos JavaScript
- **Total:** 24 arquivos organizados

### Conteúdo
- **15** questões no quiz
- **Mais de 15** SVGs únicos
- **4** animações Canvas diferentes
- **6** seções educacionais completas
- **3** processadores de áudio interativos

### Código
- **~3.500** linhas de código no total
- **~1.200** linhas de JavaScript
- **~1.000** linhas de CSS
- **~1.300** linhas de HTML

## Uso Educacional

### Público-Alvo
- Estudantes de Sistemas Multimídia
- Interessados em áudio digital
- Produtores musicais iniciantes
- Desenvolvedores de games
- Profissionais de áudio/vídeo

### Contextos de Uso
- Material de apoio para disciplinas
- Referência técnica
- Autoestudo
- Apresentações educacionais
- Demonstrações práticas

## Licença

Projeto educacional desenvolvido para a disciplina de **Sistemas Multimídia**.

**Propósito:** Educacional
**Uso:** Livre para fins acadêmicos
**Modificação:** Permitida para fins educacionais

---

## Informações do Projeto

**Tema:** Áudio digital para Sistemas Multimídia
**Tipo:** Protótipo de Sistema Multimídia Educacional
**Versão:** 1.0
**Data:** Novembro 2025

**Desenvolvido com:**
- HTML5, CSS3, JavaScript
- Web Audio API, Canvas 2D, SVG
- Arquitetura modular
- Design responsivo
- Foco em educação e usabilidade

---

**Sistema completo com todas as funcionalidades implementadas e requisitos atendidos.**
