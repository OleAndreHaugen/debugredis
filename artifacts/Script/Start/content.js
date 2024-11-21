const text =
    "The Neptune DXP - Open Edition executable is now delivered with a number of system artifacts that previously have been delivered through the Neptune DXP Marketplace. This will improve maintainability and ensure correct interplay of the system components. To give a clear indication which artifacts belong to the core system they have been renamed and collected in the system development package neptunesoftware-dxp-system-artifacts. This package is read-only for customers. Its content will only be updated by Neptune. The package contains the following artifacts";

const textArray = text.split(" ");

for (let i = 0; i < textArray.length; i++) {
    const delta = textArray[i];

    p9.events.publish(
        { event: "chat_update", rooms: ["123"] },
        JSON.stringify({ content: delta, index: i })
    );

    console.log(delta);
}

complete();
