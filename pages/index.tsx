import { Star, System } from "@navikt/ds-icons";
import { Checkbox, CheckboxGroup, Button, Heading, Link } from "@navikt/ds-react";
import { Dropdown, Header } from "@navikt/ds-react-internal";
import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Velkommen til NAV</title>
      </Head>
      <Header>
        <Header.Title as="h1">Velkommen til NAV</Header.Title>
        <Dropdown>
          <Header.Button as={Dropdown.Toggle} className="ml-auto">
            <System style={{ fontSize: "1.5rem" }} title="Systemer og oppslagsverk" />
          </Header.Button>

          <Dropdown.Menu>
            <Dropdown.Menu.GroupedList>
              <Dropdown.Menu.GroupedList.Heading>
                Dokumentasjon
              </Dropdown.Menu.GroupedList.Heading>
              <Dropdown.Menu.GroupedList.Item as="a" href="https://aksel.nav.no/">
                aksel.nav.no
              </Dropdown.Menu.GroupedList.Item>
              <Dropdown.Menu.GroupedList.Item as="a" href="https://docs.nais.io/">
                docs.nais.io
              </Dropdown.Menu.GroupedList.Item>
              <Dropdown.Menu.GroupedList.Item as="a" href="https://docs.knada.io/">
                docs.knada.io
              </Dropdown.Menu.GroupedList.Item>
              <Dropdown.Menu.GroupedList.Item as="a" href="https://sikkerhet.nav.no/">
                sikkerhet.nav.no
              </Dropdown.Menu.GroupedList.Item>
            </Dropdown.Menu.GroupedList>
          </Dropdown.Menu>
        </Dropdown>
      </Header>
      <main className="layout">
        <div>
          <Heading spacing level="2" size="large">
            Velkommen til NAV ❤️
          </Heading>
          <p>Hei og velkommen som nyansatt i NAV. Kjekt å ha deg med på laget!</p>
        </div>
        <div>
          <Heading spacing level="2" size="medium">
            Kom i gang
          </Heading>
          <CheckboxGroup legend="Dette må du huske!">
            <Checkbox value="Bakerst">Installere Slack</Checkbox>
            <Checkbox value="Midterst">Sette opp Naisdevice</Checkbox>
            <Checkbox value="Fremst">Aktivere MyApps</Checkbox>
            <Checkbox value="Fremst">Konto på GitHub</Checkbox>
          </CheckboxGroup>
        </div>
        <div>
          <Heading spacing level="2" size="medium">
            Button med ikon
          </Heading>
          <Button icon={<Star aria-hidden />}>Klikk meg!</Button>
        </div>
        <div>
          <Heading spacing level="2" size="medium">
            Bruk av Nextjs-lenker
          </Heading>
          <NextLink passHref href="/#">
            <Link>Lenke til en side</Link>
          </NextLink>
        </div>
        <div>
          <Heading spacing level="2" size="medium">
            OverridableComponent
          </Heading>
          <NextLink passHref href="/">
            <Button as="a">{`Knapp med "a"-tag`}</Button>
          </NextLink>
        </div>
      </main>
    </div>
  );
};

export default Home;
