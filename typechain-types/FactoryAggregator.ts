/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace FactoryAggregator {
  export type FactoryDetailsStruct = {
    factoryAddress: PromiseOrValue<string>;
    factoryName: PromiseOrValue<string>;
    factoryDescription: PromiseOrValue<string>;
    audited: PromiseOrValue<boolean>;
  };

  export type FactoryDetailsStructOutput = [string, string, string, boolean] & {
    factoryAddress: string;
    factoryName: string;
    factoryDescription: string;
    audited: boolean;
  };
}

export interface FactoryAggregatorInterface extends utils.Interface {
  functions: {
    "addFactory(address,string,string,bool)": FunctionFragment;
    "factories(address)": FunctionFragment;
    "factoryAddresses(uint256)": FunctionFragment;
    "getAllFactories()": FunctionFragment;
    "getSingleFactory(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addFactory"
      | "factories"
      | "factoryAddresses"
      | "getAllFactories"
      | "getSingleFactory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addFactory",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "factories",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "factoryAddresses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllFactories",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSingleFactory",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addFactory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factories", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "factoryAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllFactories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSingleFactory",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FactoryAggregator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FactoryAggregatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addFactory(
      _factoryAddress: PromiseOrValue<string>,
      _factoryName: PromiseOrValue<string>,
      _factoryDescription: PromiseOrValue<string>,
      _audited: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    factories(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        factoryAddress: string;
        factoryName: string;
        factoryDescription: string;
        audited: boolean;
      }
    >;

    factoryAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAllFactories(
      overrides?: CallOverrides
    ): Promise<[FactoryAggregator.FactoryDetailsStructOutput[]]>;

    getSingleFactory(
      _factoryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[FactoryAggregator.FactoryDetailsStructOutput]>;
  };

  addFactory(
    _factoryAddress: PromiseOrValue<string>,
    _factoryName: PromiseOrValue<string>,
    _factoryDescription: PromiseOrValue<string>,
    _audited: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  factories(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, boolean] & {
      factoryAddress: string;
      factoryName: string;
      factoryDescription: string;
      audited: boolean;
    }
  >;

  factoryAddresses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getAllFactories(
    overrides?: CallOverrides
  ): Promise<FactoryAggregator.FactoryDetailsStructOutput[]>;

  getSingleFactory(
    _factoryAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<FactoryAggregator.FactoryDetailsStructOutput>;

  callStatic: {
    addFactory(
      _factoryAddress: PromiseOrValue<string>,
      _factoryName: PromiseOrValue<string>,
      _factoryDescription: PromiseOrValue<string>,
      _audited: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    factories(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        factoryAddress: string;
        factoryName: string;
        factoryDescription: string;
        audited: boolean;
      }
    >;

    factoryAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getAllFactories(
      overrides?: CallOverrides
    ): Promise<FactoryAggregator.FactoryDetailsStructOutput[]>;

    getSingleFactory(
      _factoryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<FactoryAggregator.FactoryDetailsStructOutput>;
  };

  filters: {};

  estimateGas: {
    addFactory(
      _factoryAddress: PromiseOrValue<string>,
      _factoryName: PromiseOrValue<string>,
      _factoryDescription: PromiseOrValue<string>,
      _audited: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    factories(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factoryAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllFactories(overrides?: CallOverrides): Promise<BigNumber>;

    getSingleFactory(
      _factoryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addFactory(
      _factoryAddress: PromiseOrValue<string>,
      _factoryName: PromiseOrValue<string>,
      _factoryDescription: PromiseOrValue<string>,
      _audited: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    factories(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factoryAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllFactories(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSingleFactory(
      _factoryAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}