import {
  Button,
  Box,
  Grid,
  Container,
  Text,
  Heading,
  Image,
  Link,
  Card
} from 'theme-ui';
import theme from '../../lib/theme';
import Icon from '../../components/icon';

const Service = ({ href, title, icon, size, ...props }) => (
  <Link
    target="_blank"
    rel="noreferrer"
    href={href}
    title={title}
    children={<Icon glyph={icon} size={size} />}
    {...props}
  />
);

const color = theme.colors.primary;

const SpeakerSection = () => {
  return (
    <Box
      id="speaker-section"
      as="section"
      sx={{
        color: 'white',
        minHeight: '100vh',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.colors.darker
      }}
    >
      <Container>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mt: [5, 5]
          }}
        >
          <Heading
            as="h1"
            variant="ultratitle"
            mt={[3, 5]}
            sx={{
              color,
              textAlign: 'center',
              textTransform: 'uppercase',
              WebkitTextStroke: 'white',
              WebkitTextStrokeWidth: '2px',
              WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0 0 1px ${color}) drop-shadow(0 0 2px ${color}) drop-shadow(0 0 6px ${color})`
            }}
          >
            HACKNITR 2.0
          </Heading>
          <Text
            as="h6"
            variant="subtitle"
            mt={2}
            mb={[4, 3]}
            sx={{
              fontSize: [2, 4],
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            19 - 21 March, 2021
          </Text>
        </Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', mb: [5, 5], mt: [2, 5] }}
        >
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              bg: 'rgb(255, 212, 64)'
            }}
          >
            Past Speakers
          </Text>
        </Heading>

        <Grid
          columns={[1, 2]}
          gap={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: [5, 5]
          }}
        >
          <Container
            sx={{
              maxWidth: ['400px', '600px'],
              cursor: 'pointer',
              margin: '0 auto',
              width: 'fit-content',
              padding: '0',
              borderRadius: '100px',
              transition: 'transform .5s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                boxShadow: '2px 2px 10px #000',
                borderRadius: '10px'
              }}
            >
              <Image
                sx={{
                  objectFit: 'cover',
                  borderRadius: ['10px 10px 0 0', '10px 0 0 10px'],
                  minWidth: '40%'
                }}
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/Speakers/gauravsen2.jpg"
              />
              <Box
                sx={{
                  color: '#8492A6',
                  background: '#252429',
                  minWidth: ['200px', '300px'],
                  paddingLeft: '1rem',
                  paddingRight: '14px',
                  borderRadius: ['0 0 10px 10px', '0 10px 10px 0']
                }}
              >
                <Heading
                  sx={{
                    textAlign: 'left',
                    pt: ['0.7rem', '1.5rem'],
                    pb: [1, 1],
                    fontSize: [2, 3],
                    color: '#fff'
                  }}
                >
                  Gaurav Sen
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    pb: [1, 3],
                    fontWeight: '400',
                    color: '#fff'
                  }}
                >
                  Founder of InterviewReady, Ex-Uber
                </Heading>
                <Text
                  sx={{
                    textAlign: 'left',
                    fontSize: '14px',
                    pt: [1, 2],
                    pb: [1, 3]
                  }}
                >
                  Gaurav is a Software Engineer and a Content Creator. His
                  YouTube channel on system design and algorithms boasts more
                  than 300k subscribers.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: ['0.6rem', '1rem'],
                    paddingTop: '5px'
                  }}
                >
                  <Service
                    href="https://twitter.com/gkcs_"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="twitter"
                    title="Gaurav on Twitter"
                  />

                  <Service
                    href="https://www.youtube.com/c/GauravSensei"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      pl: '1rem',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="youtube"
                    title="Gaurav on Youtube"
                  />

                  <Box
                    sx={{
                      fontSize: '11px',
                      ml: '36%',
                      mb: '0',
                      backgroundColor: '#EC3750',
                      backgroundImage: 'at left top, rgb(255,140,55)',
                      padding: '3px 5px',
                      borderRadius: '5px',
                      color: '#fff'
                    }}
                  >
                    <a
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        color: '#fff'
                      }}
                      href="https://calendar.google.com/calendar/u/0/r/eventedit?uid=5f4212d7db36e40015f240cf&location=http://hacknitr.tech/live&ctz=Asia/Calcutta&text=System%20Design%20for%20Hackathons%20-%20HackNITR%202.0&dates=20210319T180000/20210319T200000&details=This%20is%20the%20reminder%20for%20Gaurav%20Sen%27s%20session%20on%20-%20%22%20System%20Design%20for%20Hackathons%20%22.%20HackNITR%202.0%20will%20be%20conducted%20entirely%20on%20Airmeet%20and%20the%20join%20link%20will%20be%20active%2006%20hrs%20before%20the%20event.%0A%0AJoin%20Link%3A%20http%3A//hacknitr.tech/live"
                      target="_blank"
                    >
                      <Service
                        size={24}
                        sx={{
                          justifySelf: 'center',
                          color: '#fff',
                          ':hover': {
                            color: '#fff'
                          }
                        }}
                        icon="event-add"
                        title="Add to Google Calendar"
                      />
                      <Text
                        as="p"
                        sx={{ pt: '3px', ':hover': { color: '#c0c0c0' } }}
                      >
                        Add to calendar
                      </Text>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>

          <Container
            sx={{
              maxWidth: ['400px', '600px'],
              cursor: 'pointer',
              margin: '0 auto',
              width: 'fit-content',
              padding: '0',
              borderRadius: '100px',
              transition: 'transform .5s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                boxShadow: '2px 2px 10px #000',
                borderRadius: '10px'
              }}
            >
              <Image
                sx={{
                  objectFit: 'cover',
                  borderRadius: ['10px 10px 0 0', '10px 0 0 10px']
                }}
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/Speakers/Juan.jpg"
              />
              <Box
                sx={{
                  color: '#8492A6',
                  background: '#252429',
                  minWidth: ['200px', '300px'],
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  borderRadius: ['0 0 10px 10px', '0 10px 10px 0']
                }}
              >
                <Heading
                  sx={{
                    textAlign: 'left',
                    pt: ['0.7rem', '1.5rem'],
                    pb: [1, 1],
                    fontSize: [2, 3],
                    color: '#fff'
                  }}
                >
                  Juan Pablo Flores
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    pb: [1, 3],
                    fontWeight: '400',
                    color: '#fff'
                  }}
                >
                  Student Program Manager, Github Education
                </Heading>
                <Text
                  sx={{
                    textAlign: 'left',
                    fontSize: '14px',
                    pt: [1, 2],
                    pb: [1, 3]
                  }}
                >
                  Juan is a Program Manager at the GitHub Education Team, where
                  he supports student leaders to build and grow local technical
                  communities in their schools.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: ['0.6rem', '1rem'],
                    paddingTop: '5px'
                  }}
                >
                  <Service
                    href="https://twitter.com/juanpflores_"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="twitter"
                    title="Juan on Twitter"
                  />

                  <Service
                    href="https://github.com/juanpflores"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      pl: '1rem',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="github"
                    title="Juan on GitHub"
                  />

                  <Box
                    sx={{
                      fontSize: '12px',
                      ml: '35%',
                      mb: '0',
                      backgroundColor: '#EC3750',
                      backgroundImage: 'at left top, rgb(255,140,55)',
                      padding: '3px 5px',
                      borderRadius: '5px',
                      color: '#fff'
                    }}
                  >
                    <a
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        color: '#fff'
                      }}
                      href="https://calendar.google.com/calendar/u/0/r/eventedit?uid=5f4212d7db36e40015f240cf&location=http://hacknitr.tech/live&ctz=Asia/Calcutta&text=Exploring%20Tech%20through%20communities%20-%20HackNITR%202.0&dates=20210321T220000/20210321T230000&details=This%20is%20the%20reminder%20for%20Juan%20Pablo%20Flores%27s%20session.%20HackNITR%202.0%20will%20be%20conducted%20entirely%20on%20Airmeet%20and%20the%20join%20link%20will%20be%20active%2006%20hrs%20before%20the%20event.%0A%0AJoin%20Link%3A%20http%3A//hacknitr.tech/live"
                      target="_blank"
                    >
                      <Service
                        size={24}
                        sx={{
                          justifySelf: 'center',
                          color: '#fff',
                          ':hover': {
                            color: '#fff'
                          }
                        }}
                        icon="event-add"
                        title="Add to Google Calendar"
                      />
                      <Text
                        as="p"
                        sx={{ pt: '3px', ':hover': { color: '#c0c0c0' } }}
                      >
                        Add to calendar
                      </Text>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>

        <Grid
          columns={[1, 2]}
          gap={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: [5, 5]
          }}
        >
          <Container
            sx={{
              maxWidth: ['400px', '600px'],
              cursor: 'pointer',
              margin: '0 auto',
              width: 'fit-content',
              padding: '0',
              borderRadius: '100px',
              transition: 'transform .5s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                boxShadow: '2px 2px 10px #000',
                borderRadius: '10px'
              }}
            >
              <Image
                sx={{
                  objectFit: 'cover',
                  borderRadius: ['10px 10px 0 0', '10px 0 0 10px'],
                  minWidth: '40%'
                }}
                src="/images/Speakers/logan.png"
              />
              <Box
                sx={{
                  color: '#8492A6',
                  background: '#252429',
                  minWidth: ['200px', '300px'],
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  borderRadius: ['0 0 10px 10px', '0 10px 10px 0']
                }}
              >
                <Heading
                  sx={{
                    textAlign: 'left',
                    pt: ['0.7rem', '1rem'],
                    pb: [1, 1],
                    fontSize: [2, 3],
                    color: '#fff'
                  }}
                >
                  Logan Kilpatrick
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    pb: [1, 2],
                    fontWeight: '400',
                    color: '#fff'
                  }}
                >
                  Software Engineer at Apple, Julia Language Community Manager
                </Heading>
                <Text
                  sx={{
                    textAlign: 'left',
                    fontSize: '14px',
                    pt: [1, 0],
                    pb: [1, 0]
                  }}
                >
                  Logan currently splits his time between a number of
                  professional commitments he is passionate about. He spends
                  majority of his free time thinking and building things for the
                  Julia Community.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: ['0.6rem', '0.5rem'],
                    paddingTop: '5px'
                  }}
                >
                  <Service
                    href="https://twitter.com/OfficialLoganK"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="twitter"
                    title="Logan on Twitter"
                  />

                  <Service
                    href="https://github.com/logankilpatrick"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      pl: '1rem',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="github"
                    title="Logan on GitHub"
                  />

                  <Box
                    sx={{
                      fontSize: '12px',
                      ml: '35%',
                      mb: '0',
                      backgroundColor: '#EC3750',
                      backgroundImage: 'at left top, rgb(255,140,55)',
                      padding: '3px 5px',
                      borderRadius: '5px',
                      color: '#fff'
                    }}
                  >
                    <a
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        color: '#fff'
                      }}
                      href="https://calendar.google.com/calendar/u/0/r/eventedit?uid=5f4212d7db36e40015f240cf&location=http://hacknitr.tech/live&ctz=Asia/Calcutta&text=Connect%20with%20Julia%20Community%20Manager%20-%20HackNITR%202.0&dates=20210320T193000/20210320T210000&details=This%20is%20the%20reminder%20for%20Logan%20Kilpatrick%27s%20session.%20HackNITR%202.0%20will%20be%20conducted%20entirely%20on%20Airmeet%20and%20the%20join%20link%20will%20be%20active%2006%20hrs%20before%20the%20event.%0A%0AJoin%20Link%3A%20http%3A//hacknitr.tech/live"
                      target="_blank"
                    >
                      <Service
                        size={24}
                        sx={{
                          justifySelf: 'center',
                          color: '#fff',
                          ':hover': {
                            color: '#fff'
                          }
                        }}
                        icon="event-add"
                        title="Add to Google Calendar"
                      />
                      <Text
                        as="p"
                        sx={{ pt: '3px', ':hover': { color: '#c0c0c0' } }}
                      >
                        Add to calendar
                      </Text>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>

          <Container
            sx={{
              maxWidth: ['400px', '600px'],
              cursor: 'pointer',
              margin: '0 auto',
              width: 'fit-content',
              padding: '0',
              borderRadius: '100px',
              transition: 'transform .5s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                boxShadow: '2px 2px 10px #000',
                borderRadius: '10px'
              }}
            >
              <Image
                sx={{
                  objectFit: 'cover',
                  borderRadius: ['10px 10px 0 0', '10px 0 0 10px']
                }}
                src="/images/Speakers/Nikita1.jpg"
              />
              <Box
                sx={{
                  color: '#8492A6',
                  background: '#252429',
                  minWidth: ['200px', '300px'],
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  borderRadius: ['0 0 10px 10px', '0 10px 10px 0']
                }}
              >
                <Heading
                  sx={{
                    textAlign: 'left',
                    pt: ['0.7rem', '1.5rem'],
                    pb: [1, 1],
                    fontSize: [2, 3],
                    color: '#fff'
                  }}
                >
                  Nikita Gandhi
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    pb: [1, 2],
                    fontWeight: '400',
                    color: '#fff'
                  }}
                >
                  Community Manager at Google Developers
                </Heading>
                <Text
                  sx={{
                    textAlign: 'left',
                    fontSize: '14px',
                    pt: [1, 2],
                    pb: [1, 2]
                  }}
                >
                  Nikita is a part of Developer Ecosystem team at Google. She is
                  extremely passionate about spreading technical knowledge with
                  masses online and offline.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: ['0.6rem', '1rem'],
                    paddingTop: '5px'
                  }}
                >
                  <Service
                    href="https://twitter.com/Nikkitagandhi"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="twitter"
                    title="Nikita on Twitter"
                  />

                  <Service
                    href="https://nikkitagandhi.medium.com/"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      pl: '1rem',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="medium-fill"
                    title="Nikita on Medium"
                  />

                  <Box
                    sx={{
                      fontSize: '12px',
                      ml: '35%',
                      mb: '0',
                      backgroundColor: '#EC3750',
                      backgroundImage: 'at left top, rgb(255,140,55)',
                      padding: '3px 5px',
                      borderRadius: '5px',
                      color: '#fff'
                    }}
                  >
                    <a
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        color: '#fff'
                      }}
                      href="https://calendar.google.com/calendar/u/0/r/eventedit?uid=5f4212d7db36e40015f240cf&location=http://hacknitr.tech/live&ctz=Asia/Calcutta&text=Building%20for%20Next%20Billion%20Users%20-%20HackNITR%202.0&dates=20210312T180000/20210312T200000&details=This%20is%20the%20reminder%20for%20Nikita%20Gandhi%27s%20session%20on%20-%20%22%20Building%20for%20Next%20Billion%20Users%20%22.%20%0AHackNITR%202.0%20will%20be%20conducted%20entirely%20on%20Airmeet%20and%20the%20join%20link%20will%20be%20active%2006%20hrs%20before%20the%20event.%0A%0AJoin%20Link%3A%20http%3A//hacknitr.tech/live"
                      target="_blank"
                    >
                      <Service
                        size={24}
                        sx={{
                          justifySelf: 'center',
                          color: '#fff',
                          ':hover': {
                            color: '#fff'
                          }
                        }}
                        icon="event-add"
                        title="Add to Google Calendar"
                      />
                      <Text
                        as="p"
                        sx={{ pt: '3px', ':hover': { color: '#c0c0c0' } }}
                      >
                        Add to calendar
                      </Text>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>

        <Grid
          columns={[1, 1]}
          gap={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: [5]
          }}
        >
          <Container
            sx={{
              maxWidth: ['400px', '550px'],
              cursor: 'pointer',
              margin: '0 auto',
              width: 'fit-content',
              padding: '0',
              borderRadius: '100px',
              transition: 'transform .5s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                boxShadow: '2px 2px 10px #000',
                borderRadius: '10px'
              }}
            >
              <Box
                sx={{
                  minWidth: '200px',
                  borderRadius: ['10px 10px 0 0', '10px 0 0 10px'],
                  backgroundImage: [
                    'none',
                    'url("/images/Speakers/primeagen1.jpg")'
                  ],
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <Image
                  sx={{
                    borderRadius: ['10px 10px 0 0', '10px 0 0 10px'],
                    display: ['inherit', 'none'],
                    width: '100%'
                  }}
                  src="/images/Speakers/primeagen1.jpg"
                />
              </Box>
              <Box
                sx={{
                  color: '#8492A6',
                  background: '#252429',
                  minWidth: ['200px', '300px'],
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  borderRadius: ['0 0 10px 10px', '0 10px 10px 0']
                }}
              >
                <Heading
                  sx={{
                    textAlign: 'left',
                    pt: ['0.7rem', '1.5rem'],
                    pb: [1, 1],
                    fontSize: [2, 3],
                    color: '#fff'
                  }}
                >
                  Michael Paulson
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    pb: [1, 3],
                    fontWeight: '400',
                    color: '#fff'
                  }}
                >
                  Senior Software Engineer, Netflix
                </Heading>
                <Text
                  sx={{
                    textAlign: 'left',
                    fontSize: '14px',
                    pt: [1, 2],
                    pb: [1, 3]
                  }}
                >
                  Michael Paulson aka ThePrimeagen is a Twitch streamer that
                  focuses on the joy of programming and creating experiences
                  that encourage and excite people for engineering.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: ['0.6rem', '1rem'],
                    paddingTop: '5px'
                  }}
                >
                  <Service
                    href="https://twitter.com/ThePrimeagen"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="twitter"
                    title="ThePrimeagen on Twitter"
                  />

                  <Service
                    href="https://www.youtube.com/channel/UC8ENHE5xdFSwx71u3fDH5Xw"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      pl: '1rem',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="youtube"
                    title="ThePrimeagen on Youtube"
                  />

                  <Box
                    sx={{
                      fontSize: '12px',
                      ml: ['30%', '40%'],
                      mb: '0',
                      backgroundColor: '#EC3750',
                      backgroundImage: 'at left top, rgb(255,140,55)',
                      padding: '3px 5px',
                      borderRadius: '5px',
                      color: '#fff'
                    }}
                  >
                    <a
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        color: '#fff'
                      }}
                      href="https://calendar.google.com/calendar/u/0/r/eventedit?uid=5f4212d7db36e40015f240cf&location=http://hacknitr.tech/live&ctz=Asia/Calcutta&text=What%20excites%20me%20to%20be%20a%20developer%20-%20HackNITR%202.0&dates=20210319T220000/20210319T230000&details=This%20is%20the%20reminder%20for%20Michael%20Paulson%20aka%20The%20Primeagen%27s%20session%20on%20-%20%22%20What%20excites%20me%20to%20be%20a%20developer%20%22.%20HackNITR%202.0%20will%20be%20conducted%20entirely%20on%20Airmeet%20and%20the%20join%20link%20will%20be%20active%2006%20hrs%20before%20the%20event.%0A%0AJoin%20Link%3A%20http%3A%2F%2Fhacknitr.tech%2Flive"
                      target="_blank"
                    >
                      <Service
                        size={24}
                        sx={{
                          justifySelf: 'center',
                          color: '#fff',
                          ':hover': {
                            color: '#fff'
                          }
                        }}
                        icon="event-add"
                        title="Add to Google Calendar"
                      />
                      <Text
                        as="p"
                        sx={{ pt: '3px', ':hover': { color: '#c0c0c0' } }}
                      >
                        Add to calendar
                      </Text>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Container>
    </Box>
  );
};

export default SpeakerSection;
