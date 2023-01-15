const hre = require("hardhat");

async function main() {
  const transactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log(
    `Transaction Contract Deployed at:${transactionsContract.address}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
