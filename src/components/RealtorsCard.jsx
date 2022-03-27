import React, { useState } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { HeartFilled } from '@ant-design/icons';

import star from '../icons/star.svg';

const RealtorsCard = (props) => {

    let {name, photo, location, description, rating, rewievConter, dealsCounter, phone, catigories} = props;

    const [isPhoneChown, setShow] = useState(false);
    const [isLikeActive, setLike] = useState(false);

    return (
        <div className="realtorsCards__list__item">
        <Row wrap={false}>

          <Col > 
            <img src={photo} alt="Фото пользователя" className="realtorsCards__list__item__img" />
          </Col>

          <Col className='realtorsCards__list__item__info__wrapper' xl={{ span: 18, offset: 0 }} lg={{ span: 17, offset: 0 }} md={{ span: 16, offset: 1 }} sm={{ span: 16, offset: 1 }} >

            <Row className='realtorsCards__list__item__info' justify='space-between'>

              <Col span='24'>

                <Col className='realtorsCards__list__item__info' span="24">
                  <h5 className="realtorsCards__list__item__name">{name}</h5>
                  <p className="realtorsCards__list__item__locationTime">{location}</p>

                  <Row gutter={[8, 8]} className='realtorsCards__list__item__categories desktop'>
                    <Col className='realtorsCards__list__item__categories__item__wrapper'><p className="realtorsCards__list__item__categories__item deals">{`Сделок: ${dealsCounter}`}</p></Col>

                    {catigories.map(category => {
                     return <Col className='realtorsCards__list__item__categories__item__wrapper'><p className="realtorsCards__list__item__categories__item">{category}</p></Col>
                    })}
                  </Row>

                  <Col className="realtorsCards__list__item__discription__wrapper" xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 24, offset: 0 }}>
                    <p className="realtorsCards__list__item__discription">{description}</p>
                  </Col>

                </Col>

              </Col>

              <Col className='realtorsCards__list__item__feedbackAndContacts__wrapper desktop' xl={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }} md={{ span: 0, offset: 0 }} align='bottom'>
                <div className="realtorsCards__list__item__feedbackAndContacts">

                  <Row justify='space-between' align='middle' >

                    <Col xl={{ span: 8 }} lg={{ span: 8 }} md={{ span: 8 }} sm={{ span: 8 }} xs={{ span: 24 }}>

                      <Row className='realtorsCards__list__item__feedback' align='middle'>
                        <Col className="realtorsCards__list__item__feedbackAndContacts__star realtorsCards__list__item__feedback__item">
                          <Row align='middle'>
                            <img src={star} alt="" className="realtorsCards__list__item__feedbackAndContacts__star__img" />
                            <h6 className="realtorsCards__list__item__feedbackAndContacts__star__text">{rating}</h6>
                          </Row>
                        </Col>
                        <Col className='realtorsCards__list__item__feedback__item'><div className="realtorsCards__list__item__feedbackAndContacts__star__line"></div></Col>
                        <Col className='realtorsCards__list__item__feedback__item'><p className="realtorsCards__list__item__feedbackAndContacts__star__review">{rewievConter} отзывов</p></Col>
                      </Row>

                    </Col>


                    <Col>
                      <Row align='middle' wrap={false} justify="end" >
                        <Col><div onClick={() => setLike(!isLikeActive)} className="realtorsCards__list__item__feedbackAndContacts__addToFavourite"><HeartFilled className={isLikeActive ? 'active' : ''} /></div></Col>

                        <Col flex="auto">
                          <span onClick={() => setShow(true)} className={`realtorsCards__list__item__feedbackAndContacts__phone ${isPhoneChown ? 'phone' : 'text'}`}>{isPhoneChown ? <a href={`tel:${phone.compressed}`}>{phone.expanded}</a> : 'Показать телефон'}</span>
                        </Col>
                      </Row>
                    </Col>

                  </Row>

                </div>
              </Col>

            </Row>

          </Col>

        </Row>

        <Row>

          <Col>
            <Row gutter={[8, 8]} className='realtorsCards__list__item__categories mobile'>
              <Col className='realtorsCards__list__item__categories__item__wrapper'><p className="realtorsCards__list__item__categories__item deals">{`Сделок: ${dealsCounter}`}</p></Col>

              {catigories.map(category => {
                     return <Col className='realtorsCards__list__item__categories__item__wrapper'><p className="realtorsCards__list__item__categories__item">{category}</p></Col>
                    })}
            </Row>
          </Col>



          <Col className='realtorsCards__list__item__feedbackAndContacts__wrapper mobile' xl={{ span: 0, offset: 0 }} lg={{ span: 0, offset: 0 }} md={{ span: 24, offset: 0 }} align='bottom'>
            <div className="realtorsCards__list__item__feedbackAndContacts">

              <Row justify='space-between' align='middle'>

                <Col className='realtorsCards__list__item__feedbackAndContacts__half'>

                  <Row className='realtorsCards__list__item__feedback' align='middle'>
                    <Col className="realtorsCards__list__item__feedbackAndContacts__star realtorsCards__list__item__feedback__item">
                      <Row align='middle'>
                        <img src={star} alt="" className="realtorsCards__list__item__feedbackAndContacts__star__img" />
                        <h6 className="realtorsCards__list__item__feedbackAndContacts__star__text">23.2</h6>
                      </Row>
                    </Col>
                    <Col className='realtorsCards__list__item__feedback__item'><div className="realtorsCards__list__item__feedbackAndContacts__star__line"></div></Col>
                    <Col className='realtorsCards__list__item__feedback__item'><p className="realtorsCards__list__item__feedbackAndContacts__star__review">3 отзывов</p></Col>
                  </Row>

                </Col>


                <Col className='realtorsCards__list__item__feedbackAndContacts__half'>
                  <Row align='middle'>
                    <Col><div onClick={() => setLike(!isLikeActive)} className="realtorsCards__list__item__feedbackAndContacts__addToFavourite"><HeartFilled className={isLikeActive ? 'active' : ''} /></div></Col>

                    <Col flex="auto" className='realtorsCards__list__item__feedbackAndContacts__phone__wrapper'>
                      <span onClick={() => setShow(true)} className={`realtorsCards__list__item__feedbackAndContacts__phone ${isPhoneChown ? 'phone' : 'text'}`}>{isPhoneChown ? <a href={`tel:${phone.compressed}`}>{phone.expanded}</a> : 'Показать телефон'}</span>
                    </Col>
                  </Row>
                </Col>

              </Row>

            </div>
          </Col>

        </Row>

      </div>
    )
}

export default RealtorsCard;