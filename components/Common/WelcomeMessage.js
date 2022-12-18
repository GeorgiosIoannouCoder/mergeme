import { Icon, Message, Divider } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";
  return (
    <Message
      color="blue"
      attached
      header={signupRoute ? "Get Merged!" : "Glad that you are back!"}
      icon={signupRoute ? "user plus" : "privacy"}
      content={
        signupRoute ? "Create New Account" : "Login with Email and Password"
      }
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <>
      {signupRoute ? (
        <>
          <Message attached="bottom" warning>
            <Icon name="help" />
            Existing User? <Link href="/login">Login Here</Link> Instead!{" "}
          </Message>
          <Divider hidden />
        </>
      ) : (
        <>
          <Message attached="bottom" color="red">
            <Icon name="lock" />
            <Link href="/reset">Forgot Password?</Link>
          </Message>

          <Message attached="bottom" warning>
            <Icon name="help" />
            New User? <Link href="/signup">SignUp Here</Link> Instead!{" "}
          </Message>
        </>
      )}
    </>
  );
};
