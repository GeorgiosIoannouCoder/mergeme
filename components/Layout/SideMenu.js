import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { List, Icon } from "semantic-ui-react";
import { logoutUser } from "../../utils/authUser";

function SideMenu({
  user: { unreadNotification, email, unreadMessage, username },
  pc = true,
}) {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;

  return (
    <>
      <List
        style={{ paddingTop: "1rem" }}
        size="big"
        verticalAlign="middle"
        selection
        inverted
      >
        <Link href="/">
          <List.Item active={isActive("/")}>
            <Icon
              name="home"
              size="large"
              {...(isActive("/") && { color: "blue" })}
            />
            <List.Content>{pc && <List.Header content="Home" />}</List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="/messages">
          <List.Item active={isActive("/messages")}>
            <Icon
              name={unreadMessage ? "hand point right" : "mail outline"}
              size="large"
              {...((isActive("/messages") && { color: "blue" }) ||
                (unreadMessage && { color: "green" }))}
            />
            <List.Content>
              {pc && <List.Header content="Messages" />}
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href="/notifications">
          <List.Item active={isActive("/notifications")}>
            <Icon
              name={unreadNotification ? "hand point right" : "bell outline"}
              size="large"
              {...((isActive("/notifications") && { color: "blue" }) ||
                (unreadNotification && { color: "green" }))}
            />
            <List.Content>
              {pc && <List.Header content="Notifications" />}
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href={`/${username}`}>
          <List.Item active={router.query.username === username}>
            <Icon
              name="user"
              size="large"
              {...(router.query.username === username && { color: "blue" })}
            />
            <List.Content>
              {pc && <List.Header content="Account" />}
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <List.Item onClick={() => logoutUser(email)}>
          <Icon name="log out" size="large" />
          <List.Content>{pc && <List.Header content="Logout" />}</List.Content>
        </List.Item>
      </List>
    </>
  );
}

export default SideMenu;
