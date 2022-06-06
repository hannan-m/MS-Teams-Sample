import React from "react";
import {DefaultButton, IStackTokens, ITextFieldStyleProps, ITextFieldStyles, Stack, TextField} from "@fluentui/react";
import * as msTeams from "@microsoft/teams-js";
import {app, dialog, TaskInfo, tasks, UrlDialogInfo} from "@microsoft/teams-js";

// Tokens definition
const outerStackTokens: IStackTokens = {childrenGap: 5};

const horizontalGapStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10,
};


class Home extends React.Component {


    constructor(props: Readonly<{}>) {
        super(props);

        app.initialize().then((value) => console.log("app Initialized"));

        app.notifyAppLoaded();
    }

    openDeeplinkUrl() {
        console.log("deep link clicked");
        let url =
            "https://teams.microsoft.com/l/stage/" +
            "8f156004-d68c-430f-b5e7-89fd48754484" +
            '/0?context={"contentUrl":"' +
            `${window.location.hostname}/engagement` +
            '","websiteUrl":"' +
            `${window.location.hostname}/engagement` +
            '","name":"DemoStageView"}';
        msTeams.executeDeepLink(url);
    }

    openDeeplinkExternalUrl() {
        console.log("deep link clicked");
        let url =
            "https://teams.microsoft.com/l/stage/" +
            "8f156004-d68c-430f-b5e7-89fd48754484" +
            '/0?context={"contentUrl":"' +
            `https://deliverybackbone.kpmg.com` +
            '","websiteUrl":"' +
            `https://deliverybackbone.kpmg.com` +
            '","name":"DemoStageView"}';
        msTeams.executeDeepLink(url);
    }

    openLinkHandler() {
        console.log("clicked link", localStorage.getItem('link'));
        const taskInfo = {
            url: `${window.location.hostname}/link`,
            fallbackUrl: `${window.location.hostname}/link`,
            height: window.innerHeight,
            width: window.innerWidth,
            title: "Link",
            card: "",
        } as TaskInfo;

        tasks.startTask(taskInfo);
    }

    linkChangeHandler(event: any, value?: string) {
        localStorage.setItem('link', value!.toString());
    }

    openVideoHandler() {
        console.log("clicked video");
        const _dialog = {
            url: `${window.location.hostname}/video`,
            fallbackUrl: `${window.location.hostname}/video`,
            title: "Youtube Video",
            size: {
                height: window.innerHeight,
                width: window.innerWidth,
            },
        } as UrlDialogInfo;

        dialog.open(_dialog);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <div className="card">
                        <div className="card-body">This is some text within a card body.</div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Understanding Powered Enterprise</h5>
                            <p className="card-text">
                                <b>Powered Enterprise</b> is an outcome driven business
                                information solution.
                                <b>Powered Enterprise</b> is an outcome driven business
                                information solution.
                                <b>Powered Enterprise</b> is an outcome driven business
                                information solution.
                                <b>Powered Enterprise</b> is an outcome driven business
                                information solution.
                            </p>
                            <br/>
                            <Stack horizontal tokens={outerStackTokens}>
                                <DefaultButton
                                    text="Open Video"
                                    onClick={this.openVideoHandler}
                                    allowDisabledFocus
                                />
                                <DefaultButton
                                    text="Open App URL"
                                    onClick={this.openDeeplinkExternalUrl}
                                    allowDisabledFocus
                                />
                                <DefaultButton
                                    text="Open External URL"
                                    onClick={this.openDeeplinkExternalUrl}
                                    allowDisabledFocus
                                />
                            </Stack>
                            <Stack horizontal tokens={horizontalGapStackTokens}>
                                <Stack.Item align="center">
                                    <TextField styles={getStyles} label="Link" onChange={this.linkChangeHandler}/>
                                </Stack.Item>

                                <Stack.Item align="end">
                                    <DefaultButton
                                        text="Open Link"
                                        onClick={this.openLinkHandler}
                                        allowDisabledFocus
                                    />
                                </Stack.Item>
                            </Stack>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <div className="card-body">This is some text within a card body.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

function getStyles(props: ITextFieldStyleProps): Partial<ITextFieldStyles> {
    const {required} = props;
    return {
        fieldGroup: [
            {width: 600},
            required && {
                borderTopColor: props.theme.semanticColors.errorText,
            },
        ]
    };
}
