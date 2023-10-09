# DigiVault: A decentralized file storage and sharing solution.

## Tech Stack:

<ul>
    <li>Frontend
        <ul>
            <li>React JS</li>
            <li>SASS</li>
            <li>Ether JS</li>
            <li>IPFS</li>
        </ul>
    </li>
    <li>Smart Contract
        <ul>
            <li>Solidity</li>
            <li>Hardhat</li>
            <li>Alchemy</li>
        </ul>
    </li>
</ul>

## Workflow:

<ol>
    <li>Uploading to IPFS:
        <ul>
            <li>Step 1: User connects their metamask account to the dapp.</li>
            <li>Step 2: Choose any image by clicking on "choose Image" button.</li>
            <li>Step 3: After choosing an image, the upload button will be enabled.</li>
            <li>Step 4: Sign a transaction and upload the file to ipfs (Pinata).</li>
            <li>Step 5: After successfull upload, you can click on "get data" button and you will be able to see the pictures you uploaded to ipfs.</li>
        </ul>
    </li>
    <li>Sharing images with other users:
        <ul>
            <li>Step 1: The user will be provided with a "share" button. After clicking it user can put the address of the person, whom they want to share the file with.</li>
            <li>Step 2: The user adds the addres and clicks on "Share" button and signs a transaction.</li>
            <li>Step 3: After completing the transaction the user will be able to see the list of addresses the user shared the images with in the "People with access" drop down menu.</li>
            <li>Step 4: Now when the other user wants to check the shared image the user can go to "share data" option and paste the address of the user, who shared the image and click the "get data" button. The image will be visible.</li>
        </ul>
    </li>
</ol>

## Page Setup:

<ol>
    <li>A home page for the app, showing all the features, problem statement, solution and details along with step to use the app.</li>
    <li>A dashboard for users to connect their metamask, upload images and show images uploaded using that address.</li>
    <li>A share image page to share an image with other users.</li>
    <li>A view image page to show all the images that are shared with the metamask account connected.</li>
</ol>
