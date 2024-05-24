import { Container, Main, Content, ContentOrderCompleted } from "./style"

import noAuthorized401 from "../../assets/images2/401-error-wordpress-featured-image.jpg"

import Footer from "../../components/footer"

export function PageNotAuthorized() {
  return (
    <Container>
      <Content>
        <Main>
          <ContentOrderCompleted>
            <div>
              <h1>Você não está autorizado!</h1>

              <img src={noAuthorized401} alt="Não autorizado" />
            </div>
          </ContentOrderCompleted>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
