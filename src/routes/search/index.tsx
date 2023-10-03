import { useFetch } from "@yakad/lib";
import {
  Page,
  Main,
  Container,
  Hr,
  AppBar,
  Button,
  GridContainer,
  GridItem,
  Card,
  Row,
  Spacer,
  Stack,
  SvgIcon,
} from "@yakad/ui";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Madineh from "../../assets/svg/madineh - filled.svg";
import Makkah from "../../assets/svg/makkah - filled.svg";

interface SuraItems {
  name: string;
  uuid: string;
  number: number;
  period: string | null;
  number_of_ayahs: number;
}

// const SuraLists: Array<SuraItems> = [
//     {
//         title: "الْفَاتِحَه",
//         description: "The Opener",
//         p: "Al-Fatihah",
//         url: "/quran/1",
//         image: 1,
//     },
//     {
//         title: "البَقَرَة",
//         description: "The Cow",
//         p: "Al-Baqarah",
//         url: "/quran/2",
//         image: 1,
//     },
//     {
//         title: "آل عِمرَان",
//         description: "Family of Imran",
//         p: "Ali 'Imran",
//         url: "/quran/3",
//         image: 0,
//     },
//     {
//         title: "النِّسَاء",
//         description: "The Women",
//         p: "An-Nisa",
//         url: "/quran/4",
//         image: 1,
//     },
//     {
//         title: "المَائدة",
//         description: "The Table Spread",
//         p: "Al-Ma'idah",
//         url: "/quran/5",
//         image: 1,
//     },

//     {
//         title: "الاٴنعَام",
//         description: "The Cattle",
//         p: "Al-An'am",
//         url: "/quran/6",
//         image: 1,
//     },
// ];

function Search() {
  const navigate = useNavigate();
  const fetch = useFetch<SuraItems[]>(
    `${process.env.REACT_APP_API_URL}/surah?mushaf=hafs`,
    {
      method: "GET",
    }
  );

  useEffect(() => {
    fetch.send();
  }, []);

  return (
    <Page>
      <AppBar>
        <input
          style={{
            background: "#7d7d7d15",
            width: "100%",
            color: "inherit",
          }}
          type="Search"
          placeholder="Search Sura, Phrase or numbers(Sura:Aya, Page, Juz, Hizb)"
        />
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </Button>
      </AppBar>
      <Main>
        <Container maxWidth="md">
          <Hr />
          <GridContainer>
            {fetch.isResponseBodyReady
              ? fetch.responseBody.map((item, _index) => (
                  <GridItem xl={4} xs={12}>
                    <Link to={`/quran/${item.uuid}`}>
                      <Card>
                        <Row>
                          <h1>{item.number}</h1>
                          <Spacer />
                          <Stack style={{ gap: "0" }}>
                            <Row>
                              <h1>{item.name} </h1>
                              {/* {item.image === 1 ? (
                                                              <img
                                                                  src={Madineh}
                                                              />
                                                          ) : (
                                                              <img
                                                                  src={Makkah}
                                                              />
                                                          )} */}
                            </Row>
                            {/* <h2>{item.p}</h2> */}
                            <span>{item.period}</span>
                          </Stack>
                        </Row>
                      </Card>
                    </Link>
                  </GridItem>
                ))
              : "Loading"}
          </GridContainer>
        </Container>
      </Main>
    </Page>
  );
}

export default Search;
