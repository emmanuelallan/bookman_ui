import AddBook from '../sections/addBook';
import Layout from '../sections/layout';
import TitleSection from '../sections/titleSection';
import { useState } from 'react';

export default function Create() {
  // schema structure
  const [formData, setFormData] = useState({
    title: '',
    subTitle: '',
    description: '',
    price: '',
    quantity: '',
    coverImage: null,
    author: '',
    ISBN: '',
    pages: '',
    pubDate: '',
    language: '',
    pdf: null,
    pdf_available: false,
    pdf_price: '',
    r_average: '',
    r_global: '',
  });

  //   to handle cover image hook
  const [coverImage, setCoverImage] = useState([]);

  //   to handle pdf upload hook
  const [pdf, setPdf] = useState([]);

  //   validation errors
  const [error, setError] = useState({
    all: '',
    image: '',
    pdf: '',
    pdf_price: '',
    status: false,
  });

  //   handle form validation
  function checkEmpty(
    title,
    subTitle,
    description,
    price,
    quantity,
    author,
    pages
  ) {
    if (
      title &&
      subTitle &&
      description &&
      price &&
      quantity &&
      author &&
      pages
    ) {
      setError({
        ...error,
        all: '',
      });
    } else {
      setError({
        ...error,
        all: '* Cannot be empty',
      });
    }
  }

  function checkEmptyImagePdf(pdf_price) {
    if (Object.keys(coverImage).length === 0) {
      setError({
        ...error,
        image: 'Cover image required',
      });
    } else {
      setError({
        ...error,
        image: '',
      });
    }

    // check pdf
    if (Object.keys(pdf).length === 0) {
      if (pdf_price) {
        setError({
          ...error,
          pdf: 'PDF file is required for price to be set',
        });
      } else {
        setError({
          ...error,
          pdf: '',
        });
      }
    } else {
      if (pdf_price) {
        setError({
          ...error,
          pdf_price: '',
        });
      } else {
        setError({
          ...error,
          pdf_price: 'PDF price required',
        });
      }
    }
  }

  //   form submit
  function handleFormSubmit(e) {
    e.preventDefault();
    setFormData(() => ({
      ...formData,
      coverImage: coverImage,
      pdf: pdf,
    }));
    // const {
    //   title,
    //   subTitle,
    //   description,
    //   price,
    //   quantity,
    //   author,
    //   pages,
    //   pdf_price,
    // } = formData;
    // checkEmpty(title, subTitle, description, price, quantity, author, pages);
    // checkEmptyImagePdf(pdf_price);

    rawRes();
  }

  // handle post request
  async function rawRes() {
    await fetch('http://localhost:5000/api/v1/books', {
      method: 'POST',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      // res.json();
      console.log(res.json());
    });
  }

  //   handle input event
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  }

  return (
    <Layout>
      <TitleSection
        title="Create a Book"
        color="secondary"
        value="Back to all Books"
        path="/books"
        icon="ri-arrow-left-s-line"
      />

      <AddBook
        handleFormSubmit={handleFormSubmit}
        handleChange={handleChange}
        formData={formData}
        coverImage={coverImage}
        setCoverImage={setCoverImage}
        pdf={pdf}
        setPdf={setPdf}
        error={error}
      />
    </Layout>
  );
}
