"use client";
import Form from "@/components/Form/From";
import { useRef } from "react";
import useMatchStore from "@/store/matchStore";
import { useRouter } from "next/navigation";

// FIXME: use data.ok for fetching (if possible)
// FIXME: fix SSR and CSR for whole applicaton
// FIXME: import SSR to CSR as a children
// FIXME: use .env file for server side

// TODO: add loading.jsx to all pages, use <Suspense></Suspense>, it only works for server clients
// TODO: add not-found.jsx or notfound() from next/navigation for 404 and false data
// TODO: add error.jsx
// TODO: add api folder

// new
// TODO: add milion.js
// TODO: add passport.js

// database
// TODO: create online database for pictures and hero name request

// git
// TODO: turn off auto merge for git

// sec:
// TODO: Prevent cross-site request forgery (CSRF) attacks
// TODO: Protect against cross-site scripting (XSS) attacks
/**
 // TODO: Implement input validation and sanitization:
            Validate and sanitize all user inputs on the server-side to prevent common security vulnerabilities like SQL injection, cross-site scripting (XSS), and command injection attacks.
            Use libraries like validator or built-in validation functions to validate user inputs against expected formats and data types.
 */
/** 
  //TODO: Secure session management:
            Use secure session management techniques like JWT (JSON Web Tokens) or session cookies with secure settings to manage user sessions.
            Set appropriate expiration times for sessions and implement mechanisms for session renewal or reauthentication.
            Use session-related security headers like HttpOnly and SameSite to mitigate cross-site scripting (XSS) and cross-site request forgery (CSRF) attacks.
 */
/** 
  //TODO: Perform security audits and testing
            Regularly conduct security audits and code reviews to identify and address potential security vulnerabilities.
            Perform automated security testing and vulnerability scanning using tools like OWASP ZAP, Nessus, or Snyk to detect common security issues.
*/

const MatchInfo = () => {
  const inputNumRef = useRef();
  const { setMatchId } = useMatchStore();

  const router = useRouter();
  // *************************************
  const handleSubmitWrapper = (e) => {
    e.preventDefault();
    const matchId = inputNumRef.current.value;
    setMatchId(inputNumRef.current.value);
    router.push(`http://localhost:3000/match/${matchId}`);
  };
  // *************************************
  return (
    <div className="flex justify-center items-center h-2/6 min-h-screen ">
      <div className="bg-gray-800 shadow-md rounded-md p-8 w-2/4 grid auto-rows-min">
        <Form
          v={"Match id"}
          handleSubmitWrapper={handleSubmitWrapper}
          inputNumRef={inputNumRef}
        ></Form>
      </div>
    </div>
  );
};

export default MatchInfo;
