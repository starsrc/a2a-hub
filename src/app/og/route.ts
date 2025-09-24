import {ImageResponse} from "next/og";
import React from "react";

export const runtime = "edge";

export async function GET() {
    const size = {width: 1200, height: 630} as const;
    const bg = "#0a0a0a";
    const fg = "#ededed";

    return new ImageResponse(
        React.createElement(
            "div",
            {
                style: {
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: bg,
                    color: fg,
                },
            },
            React.createElement(
                "div",
                {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        padding: 80,
                    },
                },
                React.createElement(
                    "div",
                    {
                        style: {
                            display: "flex",
                            gap: 12,
                            alignItems: "baseline",
                            fontSize: 72,
                            fontWeight: 800,
                        },
                    },
                    React.createElement(
                        "span",
                        {
                            style: {
                                backgroundColor: "#ffffff22",
                                color: fg,
                                padding: "8px 14px",
                                borderRadius: 12,
                                fontSize: 56,
                            },
                        },
                        "A2A",
                    ),
                    React.createElement("span", null, "HUB"),
                ),
                React.createElement(
                    "div",
                    {style: {marginTop: 24, fontSize: 28, opacity: 0.8, textAlign: "center"}},
                    "Discover and explore Model Context Protocol (MCP) servers.",
                ),
                React.createElement(
                    "div",
                    {style: {marginTop: 48, display: "flex", gap: 16, opacity: 0.6, fontSize: 20}},
                    React.createElement("span", null, "a2a-hub.example.com"),
                ),
            ),
        ),
        {width: size.width, height: size.height},
    );
}
