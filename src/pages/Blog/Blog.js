import React from "react";
import Header from "../shared/Header/Header";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <Header />
      <div className="blog-page">
        <h3 className="text-primary">
          <span className="text-info h3">1 . </span>What is cors?
        </h3>
        <p className="text-muted">
          <b>Cors means Resource Sharing</b>
          This is all controlled through preflight requests that exchange a set
          of HTTP request headers and corresponding response headers
          collectively referred to as "CORS Headers", each of these headers
          modifies a different element of the Same-Origin policy to loosen the
          limitations it imposes.There's a lot of terrible advice out there
          (especially on popular forums) on how to set this up where the answers
          generally include some variant of brutally setting wildcard "*"
          response headers regardless of the request headers provided in the
          pre-flight request. This article attempts to dispel some of the common
          misconceptions about Cross-Origin Resource Sharing and provide useful
          advice on how to get things working correctly.
        </p>
        <br />
        <br />
        <h3 className="text-primary">
          <span className="text-info h3">2 . </span> Why are you using firebase?
          What other options do you have to implement authentication?
        </h3>
        <p className="text-muted">
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more.
        </p>
        <br />
        <br />
        <h3 className="text-primary">
          <span className="text-info h3">3 . </span> How does private root work?
        </h3>
        <p className="text-muted">
          Private Routes vary based on the Apps, For example, Dashboard, User
          Profile, App Settings, Home etc. In simple words, These routes can be
          accessed only after login. The constraints for Public and Private
          routes are that Public routes should not be accessed after login and
          Private routes should not be accessible before login. In this article,
          we can see. How to create public and private routes using react-router
          for your react apps. Let's start
        </p>
        <br />
        <br />
        <h3 className="text-primary">
          <span className="text-info h3">4 . </span> What is Node? How does Node work?
        </h3>
        <p className="text-muted">
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. Working of Node.js: Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request.
        </p>
      </div>
    </div>
  );
};

export default Blog;
