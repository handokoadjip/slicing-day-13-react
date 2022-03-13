import { Img2, Img3, Img4 } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="mb-0 pt-0 px-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div className="wrapper w-100 w-lg-50  d-flex align-items-end h-100">
              <p className="fs-3 fw-medium">
                “I wanted to live ina city where books lived and breathed; where
                the Hans Christian Andersen statue in. ‘Central Park or Eloise
                in the Plaza would propel me back to childhood.”
              </p>
            </div>
          </div>

          <div className="col-lg-6 mb-5">
            <div className="wrapper w-100">
              <h2 className="fs-6 fw-medium">
                Can you tell me about your frst ever New York home?
              </h2>
              <p className="mb-3">
                When Iwas born, my parents lived in a teeny tiny Manhattan
                apartment. My ‘bedroom wasa closet lived in that closet until
                was wo and ahaif years old. 1 hhave the vaguest memories of my
                parents squeezing into my closet to read me bedtime stories. One
                parent at a time, of course,
              </p>

              <h2 className="fs-6 fw-medium">
                Reminds me of “Harry Potter”—a book that was seminal in me
                falling in love ‘with writing. When did you first decide you
                wanted to work in publishing and, looking back. do you think
                there are any books that informed that choice?
              </h2>
              <p className="mb-3">
                My younger sister and I loved The Baby-Suters Cab and Sweet
                Valley series. We ‘were intimately familiar with the entire
                cannon and collectively read all the books, allthe series,
                multiple times.
              </p>
              <p>
                Or complete immersion in these books meant we would occasionally
                spot what ‘we found to be very puzzling inconsistencies. When
                Hlearned that Ann M. Martin «and Francine Pascal did ot
                personally pen every single one of iy beloved books 1 et
                incredibly betrayed. How could some random person have been
                entrusted with ‘my treasured characters? This certainly
                explained why Mary Anne was confused about where her first date
                with Logan had been. No wonder Enid seemed to suffer trom
                multiple personalities,
              </p>

              <h2 className="fs-6 fw-medium">
                | know you spent some of your childhood in South Carolina. Was
                it our ‘decision to work with books that made you decide to
                sette in New York?
              </h2>
              <p className="mb-3">
                New York City isthe epucentre of the publishing world,
                Professionally, knew if ‘wanted to work ina big traditional
                house, this was the place tobe. And persooally, ‘wanted to live
                ina city where books lived and beeathed; where the Hans
                Christian ‘Andersen statue in Central Park or{" "}
                <em>Eloise in the Plaza</em> would peopel me back to my
                ‘childhood. Any book I desires at my fingertips inthe New York{" "}
                <em>Public Library</em> or the <em>Strand</em>. I can wander by{" "}
                <em>Truman Capote's apartment</em>, the <em>Chelsea</em>, the{" "}
                <em>Algonuquin</em>, and I can see and soeak to my favorite
                writeres at the <em>92nd Street Y</em> or <em>B&B</em>. I'm very
                lucky that my professional aspirations go hand-in-hand with how
                I like to spend my personal time
              </p>
            </div>
          </div>

          <div className="offset-lg-6 col-lg-6 mb-5">
            <div className="wrapper">
              <figure>
                <img
                  className="w-100 h-image-180vh grayscale mb-2"
                  src={Img2}
                  alt="image-2"
                />
                <figcaption>
                  <small>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur quo, fugit in soluta corrupti perspiciatis?
                  </small>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-lg-6 mb-5">
            <div className="wrapper w-100 w-lg-50  h-100">
              <p className="fs-3 fw-medium">
                “These parks are tiny little microcosms of the search for
                solitude and inclusiveness, and the constant unexpectedness and
                predictability that defines New York City.”
              </p>
            </div>
          </div>

          <div className="col-lg-6 border-bottom pb-5 mb-5">
            <div className="wrapper w-100">
              <h2 className="fs-6 fw-medium">
                Finally, what's your favourite place in New York City?
              </h2>
              <p className="mb-3">
                ‘My favourite place in New York City isin the Far Eat Side inthe
                upper SOs. There area number of tiny parks nested between
                ivyscanered townhouses that overlook the East River. Hived ia
                New York for years before knew they existed. They are clegant
                and scrubby, romantic and lonely, and secluded and public all at
                once, ‘Sometimes theyre inhabited by classic Upper East
                Siders~narnnies with baby carriers, women in headbands, dog
                walkers-butf've also seen a kids birthday party culminate in the
                smashing of a Donald Trump piiata; tourists paralysed in thee
                fear of a wandering wide-eyed possum; a man with a pigeon sting
                on his head and most ubsquitous, a couple engrossed in intimate
                conversation, illumined by the shytine of Roosevelt Island,
                blissfully disinterested in anything other than cach other,
                These parks are tiny litle microcosms ofthe search for solitude
                and inclusiveness, and the constant unexpectedness and
                predictability that defines [New York City,
              </p>
            </div>
          </div>

          <div className="offset-lg-6 col-lg-6 mt-5">
            <div className="wrapper w-100">
              <div className="people-1">
                <figure className="d-flex flex-column flex-lg-row align-items-center">
                  <img
                    className="wh-image grayscale m-3 mb-lg-0"
                    src={Img3}
                    alt="People-1"
                  />
                  <figcaption>
                    <strong>Anna Soekastra</strong> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. At optio temporibus vitae
                    voluptas enim quod quo aperiam a sapiente? Facere sunt
                    repudiandae delectus? Reiciendis esse doloribus magni harum
                    est blanditiis.
                    <br />
                    <Link to="#">
                      <u className="text-muted">Businness</u>
                    </Link>
                    &nbsp;/&nbsp;
                    <Link to="#">
                      <u className="text-muted">Interview</u>
                    </Link>
                    &nbsp;/&nbsp;
                    <Link to="#">
                      <u className="text-muted">New York</u>
                    </Link>
                  </figcaption>
                </figure>
              </div>
              <div className="people-2">
                <figure className="d-flex flex-column flex-lg-row align-items-center">
                  <img
                    className="wh-image grayscale m-3 mb-lg-0"
                    src={Img4}
                    alt="People-2"
                  />
                  <figcaption>
                    <strong>Calvin Tech</strong> Lorem ipsu m dolor sit amet
                    consectetur adipisicing elit. At optio temporibus vitae
                    voluptas enim quod quo aperiam a sapiente? Facere sunt
                    repudiandae delectus? Reiciendis esse doloribus magni harum
                    est blanditiis.
                    <br />
                    <Link to="#">
                      <u className="text-muted">Businness</u>
                    </Link>
                    &nbsp;/&nbsp;
                    <Link to="#">
                      <u className="text-muted">Interview</u>
                    </Link>
                    &nbsp;/&nbsp;
                    <Link to="#">
                      <u className="text-muted">New York</u>
                    </Link>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
