
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Artisan
 * 
 */
export type Artisan = $Result.DefaultSelection<Prisma.$ArtisanPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model StructuredRequirement
 * 
 */
export type StructuredRequirement = $Result.DefaultSelection<Prisma.$StructuredRequirementPayload>
/**
 * Model CraftPlan
 * 
 */
export type CraftPlan = $Result.DefaultSelection<Prisma.$CraftPlanPayload>
/**
 * Model PreviewResult
 * 
 */
export type PreviewResult = $Result.DefaultSelection<Prisma.$PreviewResultPayload>
/**
 * Model ArtisanMatch
 * 
 */
export type ArtisanMatch = $Result.DefaultSelection<Prisma.$ArtisanMatchPayload>
/**
 * Model DesignConfirmation
 * 
 */
export type DesignConfirmation = $Result.DefaultSelection<Prisma.$DesignConfirmationPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderMessage
 * 
 */
export type OrderMessage = $Result.DefaultSelection<Prisma.$OrderMessagePayload>
/**
 * Model OrderStage
 * 
 */
export type OrderStage = $Result.DefaultSelection<Prisma.$OrderStagePayload>
/**
 * Model UploadedFile
 * 
 */
export type UploadedFile = $Result.DefaultSelection<Prisma.$UploadedFilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artisan`: Exposes CRUD operations for the **Artisan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artisans
    * const artisans = await prisma.artisan.findMany()
    * ```
    */
  get artisan(): Prisma.ArtisanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.structuredRequirement`: Exposes CRUD operations for the **StructuredRequirement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StructuredRequirements
    * const structuredRequirements = await prisma.structuredRequirement.findMany()
    * ```
    */
  get structuredRequirement(): Prisma.StructuredRequirementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.craftPlan`: Exposes CRUD operations for the **CraftPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CraftPlans
    * const craftPlans = await prisma.craftPlan.findMany()
    * ```
    */
  get craftPlan(): Prisma.CraftPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.previewResult`: Exposes CRUD operations for the **PreviewResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreviewResults
    * const previewResults = await prisma.previewResult.findMany()
    * ```
    */
  get previewResult(): Prisma.PreviewResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artisanMatch`: Exposes CRUD operations for the **ArtisanMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtisanMatches
    * const artisanMatches = await prisma.artisanMatch.findMany()
    * ```
    */
  get artisanMatch(): Prisma.ArtisanMatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.designConfirmation`: Exposes CRUD operations for the **DesignConfirmation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DesignConfirmations
    * const designConfirmations = await prisma.designConfirmation.findMany()
    * ```
    */
  get designConfirmation(): Prisma.DesignConfirmationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderMessage`: Exposes CRUD operations for the **OrderMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderMessages
    * const orderMessages = await prisma.orderMessage.findMany()
    * ```
    */
  get orderMessage(): Prisma.OrderMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderStage`: Exposes CRUD operations for the **OrderStage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderStages
    * const orderStages = await prisma.orderStage.findMany()
    * ```
    */
  get orderStage(): Prisma.OrderStageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploadedFile`: Exposes CRUD operations for the **UploadedFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadedFiles
    * const uploadedFiles = await prisma.uploadedFile.findMany()
    * ```
    */
  get uploadedFile(): Prisma.UploadedFileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Artisan: 'Artisan',
    Submission: 'Submission',
    StructuredRequirement: 'StructuredRequirement',
    CraftPlan: 'CraftPlan',
    PreviewResult: 'PreviewResult',
    ArtisanMatch: 'ArtisanMatch',
    DesignConfirmation: 'DesignConfirmation',
    Order: 'Order',
    OrderMessage: 'OrderMessage',
    OrderStage: 'OrderStage',
    UploadedFile: 'UploadedFile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "artisan" | "submission" | "structuredRequirement" | "craftPlan" | "previewResult" | "artisanMatch" | "designConfirmation" | "order" | "orderMessage" | "orderStage" | "uploadedFile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Artisan: {
        payload: Prisma.$ArtisanPayload<ExtArgs>
        fields: Prisma.ArtisanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtisanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtisanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          findFirst: {
            args: Prisma.ArtisanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtisanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          findMany: {
            args: Prisma.ArtisanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          create: {
            args: Prisma.ArtisanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          createMany: {
            args: Prisma.ArtisanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtisanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          delete: {
            args: Prisma.ArtisanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          update: {
            args: Prisma.ArtisanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          deleteMany: {
            args: Prisma.ArtisanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtisanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtisanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>[]
          }
          upsert: {
            args: Prisma.ArtisanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanPayload>
          }
          aggregate: {
            args: Prisma.ArtisanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtisan>
          }
          groupBy: {
            args: Prisma.ArtisanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtisanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtisanCountArgs<ExtArgs>
            result: $Utils.Optional<ArtisanCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      StructuredRequirement: {
        payload: Prisma.$StructuredRequirementPayload<ExtArgs>
        fields: Prisma.StructuredRequirementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StructuredRequirementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StructuredRequirementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>
          }
          findFirst: {
            args: Prisma.StructuredRequirementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StructuredRequirementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>
          }
          findMany: {
            args: Prisma.StructuredRequirementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>[]
          }
          create: {
            args: Prisma.StructuredRequirementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>
          }
          createMany: {
            args: Prisma.StructuredRequirementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StructuredRequirementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>[]
          }
          delete: {
            args: Prisma.StructuredRequirementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>
          }
          update: {
            args: Prisma.StructuredRequirementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>
          }
          deleteMany: {
            args: Prisma.StructuredRequirementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StructuredRequirementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StructuredRequirementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>[]
          }
          upsert: {
            args: Prisma.StructuredRequirementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructuredRequirementPayload>
          }
          aggregate: {
            args: Prisma.StructuredRequirementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStructuredRequirement>
          }
          groupBy: {
            args: Prisma.StructuredRequirementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StructuredRequirementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StructuredRequirementCountArgs<ExtArgs>
            result: $Utils.Optional<StructuredRequirementCountAggregateOutputType> | number
          }
        }
      }
      CraftPlan: {
        payload: Prisma.$CraftPlanPayload<ExtArgs>
        fields: Prisma.CraftPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CraftPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CraftPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>
          }
          findFirst: {
            args: Prisma.CraftPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CraftPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>
          }
          findMany: {
            args: Prisma.CraftPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>[]
          }
          create: {
            args: Prisma.CraftPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>
          }
          createMany: {
            args: Prisma.CraftPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CraftPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>[]
          }
          delete: {
            args: Prisma.CraftPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>
          }
          update: {
            args: Prisma.CraftPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>
          }
          deleteMany: {
            args: Prisma.CraftPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CraftPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CraftPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>[]
          }
          upsert: {
            args: Prisma.CraftPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CraftPlanPayload>
          }
          aggregate: {
            args: Prisma.CraftPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCraftPlan>
          }
          groupBy: {
            args: Prisma.CraftPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<CraftPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.CraftPlanCountArgs<ExtArgs>
            result: $Utils.Optional<CraftPlanCountAggregateOutputType> | number
          }
        }
      }
      PreviewResult: {
        payload: Prisma.$PreviewResultPayload<ExtArgs>
        fields: Prisma.PreviewResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreviewResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreviewResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>
          }
          findFirst: {
            args: Prisma.PreviewResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreviewResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>
          }
          findMany: {
            args: Prisma.PreviewResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>[]
          }
          create: {
            args: Prisma.PreviewResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>
          }
          createMany: {
            args: Prisma.PreviewResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreviewResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>[]
          }
          delete: {
            args: Prisma.PreviewResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>
          }
          update: {
            args: Prisma.PreviewResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>
          }
          deleteMany: {
            args: Prisma.PreviewResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreviewResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreviewResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>[]
          }
          upsert: {
            args: Prisma.PreviewResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreviewResultPayload>
          }
          aggregate: {
            args: Prisma.PreviewResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreviewResult>
          }
          groupBy: {
            args: Prisma.PreviewResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreviewResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreviewResultCountArgs<ExtArgs>
            result: $Utils.Optional<PreviewResultCountAggregateOutputType> | number
          }
        }
      }
      ArtisanMatch: {
        payload: Prisma.$ArtisanMatchPayload<ExtArgs>
        fields: Prisma.ArtisanMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtisanMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtisanMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>
          }
          findFirst: {
            args: Prisma.ArtisanMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtisanMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>
          }
          findMany: {
            args: Prisma.ArtisanMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>[]
          }
          create: {
            args: Prisma.ArtisanMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>
          }
          createMany: {
            args: Prisma.ArtisanMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtisanMatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>[]
          }
          delete: {
            args: Prisma.ArtisanMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>
          }
          update: {
            args: Prisma.ArtisanMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>
          }
          deleteMany: {
            args: Prisma.ArtisanMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtisanMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtisanMatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>[]
          }
          upsert: {
            args: Prisma.ArtisanMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtisanMatchPayload>
          }
          aggregate: {
            args: Prisma.ArtisanMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtisanMatch>
          }
          groupBy: {
            args: Prisma.ArtisanMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtisanMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtisanMatchCountArgs<ExtArgs>
            result: $Utils.Optional<ArtisanMatchCountAggregateOutputType> | number
          }
        }
      }
      DesignConfirmation: {
        payload: Prisma.$DesignConfirmationPayload<ExtArgs>
        fields: Prisma.DesignConfirmationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DesignConfirmationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DesignConfirmationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>
          }
          findFirst: {
            args: Prisma.DesignConfirmationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DesignConfirmationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>
          }
          findMany: {
            args: Prisma.DesignConfirmationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>[]
          }
          create: {
            args: Prisma.DesignConfirmationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>
          }
          createMany: {
            args: Prisma.DesignConfirmationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DesignConfirmationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>[]
          }
          delete: {
            args: Prisma.DesignConfirmationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>
          }
          update: {
            args: Prisma.DesignConfirmationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>
          }
          deleteMany: {
            args: Prisma.DesignConfirmationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DesignConfirmationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DesignConfirmationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>[]
          }
          upsert: {
            args: Prisma.DesignConfirmationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DesignConfirmationPayload>
          }
          aggregate: {
            args: Prisma.DesignConfirmationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDesignConfirmation>
          }
          groupBy: {
            args: Prisma.DesignConfirmationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DesignConfirmationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DesignConfirmationCountArgs<ExtArgs>
            result: $Utils.Optional<DesignConfirmationCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderMessage: {
        payload: Prisma.$OrderMessagePayload<ExtArgs>
        fields: Prisma.OrderMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>
          }
          findFirst: {
            args: Prisma.OrderMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>
          }
          findMany: {
            args: Prisma.OrderMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>[]
          }
          create: {
            args: Prisma.OrderMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>
          }
          createMany: {
            args: Prisma.OrderMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>[]
          }
          delete: {
            args: Prisma.OrderMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>
          }
          update: {
            args: Prisma.OrderMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>
          }
          deleteMany: {
            args: Prisma.OrderMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>[]
          }
          upsert: {
            args: Prisma.OrderMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderMessagePayload>
          }
          aggregate: {
            args: Prisma.OrderMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderMessage>
          }
          groupBy: {
            args: Prisma.OrderMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderMessageCountArgs<ExtArgs>
            result: $Utils.Optional<OrderMessageCountAggregateOutputType> | number
          }
        }
      }
      OrderStage: {
        payload: Prisma.$OrderStagePayload<ExtArgs>
        fields: Prisma.OrderStageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderStageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderStageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>
          }
          findFirst: {
            args: Prisma.OrderStageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderStageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>
          }
          findMany: {
            args: Prisma.OrderStageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>[]
          }
          create: {
            args: Prisma.OrderStageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>
          }
          createMany: {
            args: Prisma.OrderStageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderStageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>[]
          }
          delete: {
            args: Prisma.OrderStageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>
          }
          update: {
            args: Prisma.OrderStageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>
          }
          deleteMany: {
            args: Prisma.OrderStageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderStageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderStageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>[]
          }
          upsert: {
            args: Prisma.OrderStageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderStagePayload>
          }
          aggregate: {
            args: Prisma.OrderStageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderStage>
          }
          groupBy: {
            args: Prisma.OrderStageGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderStageGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderStageCountArgs<ExtArgs>
            result: $Utils.Optional<OrderStageCountAggregateOutputType> | number
          }
        }
      }
      UploadedFile: {
        payload: Prisma.$UploadedFilePayload<ExtArgs>
        fields: Prisma.UploadedFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadedFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadedFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          findFirst: {
            args: Prisma.UploadedFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadedFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          findMany: {
            args: Prisma.UploadedFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          create: {
            args: Prisma.UploadedFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          createMany: {
            args: Prisma.UploadedFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadedFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          delete: {
            args: Prisma.UploadedFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          update: {
            args: Prisma.UploadedFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          deleteMany: {
            args: Prisma.UploadedFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadedFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadedFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          upsert: {
            args: Prisma.UploadedFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          aggregate: {
            args: Prisma.UploadedFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadedFile>
          }
          groupBy: {
            args: Prisma.UploadedFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadedFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadedFileCountArgs<ExtArgs>
            result: $Utils.Optional<UploadedFileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    artisan?: ArtisanOmit
    submission?: SubmissionOmit
    structuredRequirement?: StructuredRequirementOmit
    craftPlan?: CraftPlanOmit
    previewResult?: PreviewResultOmit
    artisanMatch?: ArtisanMatchOmit
    designConfirmation?: DesignConfirmationOmit
    order?: OrderOmit
    orderMessage?: OrderMessageOmit
    orderStage?: OrderStageOmit
    uploadedFile?: UploadedFileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submissions: number
    orders: number
    orderMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    orderMessages?: boolean | UserCountOutputTypeCountOrderMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderMessageWhereInput
  }


  /**
   * Count Type ArtisanCountOutputType
   */

  export type ArtisanCountOutputType = {
    artisanMatches: number
    orders: number
    orderMessages: number
  }

  export type ArtisanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artisanMatches?: boolean | ArtisanCountOutputTypeCountArtisanMatchesArgs
    orders?: boolean | ArtisanCountOutputTypeCountOrdersArgs
    orderMessages?: boolean | ArtisanCountOutputTypeCountOrderMessagesArgs
  }

  // Custom InputTypes
  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanCountOutputType
     */
    select?: ArtisanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeCountArtisanMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtisanMatchWhereInput
  }

  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ArtisanCountOutputType without action
   */
  export type ArtisanCountOutputTypeCountOrderMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderMessageWhereInput
  }


  /**
   * Count Type CraftPlanCountOutputType
   */

  export type CraftPlanCountOutputType = {
    artisanMatches: number
  }

  export type CraftPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artisanMatches?: boolean | CraftPlanCountOutputTypeCountArtisanMatchesArgs
  }

  // Custom InputTypes
  /**
   * CraftPlanCountOutputType without action
   */
  export type CraftPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlanCountOutputType
     */
    select?: CraftPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CraftPlanCountOutputType without action
   */
  export type CraftPlanCountOutputTypeCountArtisanMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtisanMatchWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    messages: number
    stages: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | OrderCountOutputTypeCountMessagesArgs
    stages?: boolean | OrderCountOutputTypeCountStagesArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderMessageWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    phone: string | null
    passwordHash: string | null
    sessionToken: string | null
    sessionIssuedAt: Date | null
    nickname: string | null
    avatarUrl: string | null
    openid: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    phone: string | null
    passwordHash: string | null
    sessionToken: string | null
    sessionIssuedAt: Date | null
    nickname: string | null
    avatarUrl: string | null
    openid: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    phone: number
    passwordHash: number
    sessionToken: number
    sessionIssuedAt: number
    nickname: number
    avatarUrl: number
    openid: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
    passwordHash?: true
    sessionToken?: true
    sessionIssuedAt?: true
    nickname?: true
    avatarUrl?: true
    openid?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
    passwordHash?: true
    sessionToken?: true
    sessionIssuedAt?: true
    nickname?: true
    avatarUrl?: true
    openid?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    phone?: true
    passwordHash?: true
    sessionToken?: true
    sessionIssuedAt?: true
    nickname?: true
    avatarUrl?: true
    openid?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    phone: string | null
    passwordHash: string | null
    sessionToken: string | null
    sessionIssuedAt: Date | null
    nickname: string | null
    avatarUrl: string | null
    openid: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    passwordHash?: boolean
    sessionToken?: boolean
    sessionIssuedAt?: boolean
    nickname?: boolean
    avatarUrl?: boolean
    openid?: boolean
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    orderMessages?: boolean | User$orderMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    passwordHash?: boolean
    sessionToken?: boolean
    sessionIssuedAt?: boolean
    nickname?: boolean
    avatarUrl?: boolean
    openid?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    passwordHash?: boolean
    sessionToken?: boolean
    sessionIssuedAt?: boolean
    nickname?: boolean
    avatarUrl?: boolean
    openid?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    phone?: boolean
    passwordHash?: boolean
    sessionToken?: boolean
    sessionIssuedAt?: boolean
    nickname?: boolean
    avatarUrl?: boolean
    openid?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "phone" | "passwordHash" | "sessionToken" | "sessionIssuedAt" | "nickname" | "avatarUrl" | "openid", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    orderMessages?: boolean | User$orderMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      orderMessages: Prisma.$OrderMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      phone: string | null
      passwordHash: string | null
      sessionToken: string | null
      sessionIssuedAt: Date | null
      nickname: string | null
      avatarUrl: string | null
      openid: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderMessages<T extends User$orderMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$orderMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly sessionToken: FieldRef<"User", 'String'>
    readonly sessionIssuedAt: FieldRef<"User", 'DateTime'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly openid: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.orderMessages
   */
  export type User$orderMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    where?: OrderMessageWhereInput
    orderBy?: OrderMessageOrderByWithRelationInput | OrderMessageOrderByWithRelationInput[]
    cursor?: OrderMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderMessageScalarFieldEnum | OrderMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Artisan
   */

  export type AggregateArtisan = {
    _count: ArtisanCountAggregateOutputType | null
    _avg: ArtisanAvgAggregateOutputType | null
    _sum: ArtisanSumAggregateOutputType | null
    _min: ArtisanMinAggregateOutputType | null
    _max: ArtisanMaxAggregateOutputType | null
  }

  export type ArtisanAvgAggregateOutputType = {
    priceRangeMin: number | null
    priceRangeMax: number | null
    avgDays: number | null
  }

  export type ArtisanSumAggregateOutputType = {
    priceRangeMin: number | null
    priceRangeMax: number | null
    avgDays: number | null
  }

  export type ArtisanMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    priceRangeMin: number | null
    priceRangeMax: number | null
    avgDays: number | null
    verified: boolean | null
    active: boolean | null
  }

  export type ArtisanMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    priceRangeMin: number | null
    priceRangeMax: number | null
    avgDays: number | null
    verified: boolean | null
    active: boolean | null
  }

  export type ArtisanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    bio: number
    avatarUrl: number
    craftTags: number
    portfolio: number
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified: number
    active: number
    _all: number
  }


  export type ArtisanAvgAggregateInputType = {
    priceRangeMin?: true
    priceRangeMax?: true
    avgDays?: true
  }

  export type ArtisanSumAggregateInputType = {
    priceRangeMin?: true
    priceRangeMax?: true
    avgDays?: true
  }

  export type ArtisanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    bio?: true
    avatarUrl?: true
    priceRangeMin?: true
    priceRangeMax?: true
    avgDays?: true
    verified?: true
    active?: true
  }

  export type ArtisanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    bio?: true
    avatarUrl?: true
    priceRangeMin?: true
    priceRangeMax?: true
    avgDays?: true
    verified?: true
    active?: true
  }

  export type ArtisanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    bio?: true
    avatarUrl?: true
    craftTags?: true
    portfolio?: true
    priceRangeMin?: true
    priceRangeMax?: true
    avgDays?: true
    verified?: true
    active?: true
    _all?: true
  }

  export type ArtisanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artisan to aggregate.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artisans
    **/
    _count?: true | ArtisanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtisanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtisanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtisanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtisanMaxAggregateInputType
  }

  export type GetArtisanAggregateType<T extends ArtisanAggregateArgs> = {
        [P in keyof T & keyof AggregateArtisan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtisan[P]>
      : GetScalarType<T[P], AggregateArtisan[P]>
  }




  export type ArtisanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtisanWhereInput
    orderBy?: ArtisanOrderByWithAggregationInput | ArtisanOrderByWithAggregationInput[]
    by: ArtisanScalarFieldEnum[] | ArtisanScalarFieldEnum
    having?: ArtisanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtisanCountAggregateInputType | true
    _avg?: ArtisanAvgAggregateInputType
    _sum?: ArtisanSumAggregateInputType
    _min?: ArtisanMinAggregateInputType
    _max?: ArtisanMaxAggregateInputType
  }

  export type ArtisanGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    bio: string | null
    avatarUrl: string | null
    craftTags: JsonValue
    portfolio: JsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified: boolean
    active: boolean
    _count: ArtisanCountAggregateOutputType | null
    _avg: ArtisanAvgAggregateOutputType | null
    _sum: ArtisanSumAggregateOutputType | null
    _min: ArtisanMinAggregateOutputType | null
    _max: ArtisanMaxAggregateOutputType | null
  }

  type GetArtisanGroupByPayload<T extends ArtisanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtisanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtisanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtisanGroupByOutputType[P]>
            : GetScalarType<T[P], ArtisanGroupByOutputType[P]>
        }
      >
    >


  export type ArtisanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    craftTags?: boolean
    portfolio?: boolean
    priceRangeMin?: boolean
    priceRangeMax?: boolean
    avgDays?: boolean
    verified?: boolean
    active?: boolean
    artisanMatches?: boolean | Artisan$artisanMatchesArgs<ExtArgs>
    orders?: boolean | Artisan$ordersArgs<ExtArgs>
    orderMessages?: boolean | Artisan$orderMessagesArgs<ExtArgs>
    _count?: boolean | ArtisanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    craftTags?: boolean
    portfolio?: boolean
    priceRangeMin?: boolean
    priceRangeMax?: boolean
    avgDays?: boolean
    verified?: boolean
    active?: boolean
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    craftTags?: boolean
    portfolio?: boolean
    priceRangeMin?: boolean
    priceRangeMax?: boolean
    avgDays?: boolean
    verified?: boolean
    active?: boolean
  }, ExtArgs["result"]["artisan"]>

  export type ArtisanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    craftTags?: boolean
    portfolio?: boolean
    priceRangeMin?: boolean
    priceRangeMax?: boolean
    avgDays?: boolean
    verified?: boolean
    active?: boolean
  }

  export type ArtisanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "bio" | "avatarUrl" | "craftTags" | "portfolio" | "priceRangeMin" | "priceRangeMax" | "avgDays" | "verified" | "active", ExtArgs["result"]["artisan"]>
  export type ArtisanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artisanMatches?: boolean | Artisan$artisanMatchesArgs<ExtArgs>
    orders?: boolean | Artisan$ordersArgs<ExtArgs>
    orderMessages?: boolean | Artisan$orderMessagesArgs<ExtArgs>
    _count?: boolean | ArtisanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtisanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtisanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtisanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artisan"
    objects: {
      artisanMatches: Prisma.$ArtisanMatchPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      orderMessages: Prisma.$OrderMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      bio: string | null
      avatarUrl: string | null
      craftTags: Prisma.JsonValue
      portfolio: Prisma.JsonValue
      priceRangeMin: number
      priceRangeMax: number
      avgDays: number
      verified: boolean
      active: boolean
    }, ExtArgs["result"]["artisan"]>
    composites: {}
  }

  type ArtisanGetPayload<S extends boolean | null | undefined | ArtisanDefaultArgs> = $Result.GetResult<Prisma.$ArtisanPayload, S>

  type ArtisanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtisanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtisanCountAggregateInputType | true
    }

  export interface ArtisanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artisan'], meta: { name: 'Artisan' } }
    /**
     * Find zero or one Artisan that matches the filter.
     * @param {ArtisanFindUniqueArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtisanFindUniqueArgs>(args: SelectSubset<T, ArtisanFindUniqueArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artisan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtisanFindUniqueOrThrowArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtisanFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtisanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artisan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindFirstArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtisanFindFirstArgs>(args?: SelectSubset<T, ArtisanFindFirstArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artisan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindFirstOrThrowArgs} args - Arguments to find a Artisan
     * @example
     * // Get one Artisan
     * const artisan = await prisma.artisan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtisanFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtisanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artisans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artisans
     * const artisans = await prisma.artisan.findMany()
     * 
     * // Get first 10 Artisans
     * const artisans = await prisma.artisan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artisanWithIdOnly = await prisma.artisan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtisanFindManyArgs>(args?: SelectSubset<T, ArtisanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artisan.
     * @param {ArtisanCreateArgs} args - Arguments to create a Artisan.
     * @example
     * // Create one Artisan
     * const Artisan = await prisma.artisan.create({
     *   data: {
     *     // ... data to create a Artisan
     *   }
     * })
     * 
     */
    create<T extends ArtisanCreateArgs>(args: SelectSubset<T, ArtisanCreateArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artisans.
     * @param {ArtisanCreateManyArgs} args - Arguments to create many Artisans.
     * @example
     * // Create many Artisans
     * const artisan = await prisma.artisan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtisanCreateManyArgs>(args?: SelectSubset<T, ArtisanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artisans and returns the data saved in the database.
     * @param {ArtisanCreateManyAndReturnArgs} args - Arguments to create many Artisans.
     * @example
     * // Create many Artisans
     * const artisan = await prisma.artisan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artisans and only return the `id`
     * const artisanWithIdOnly = await prisma.artisan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtisanCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtisanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artisan.
     * @param {ArtisanDeleteArgs} args - Arguments to delete one Artisan.
     * @example
     * // Delete one Artisan
     * const Artisan = await prisma.artisan.delete({
     *   where: {
     *     // ... filter to delete one Artisan
     *   }
     * })
     * 
     */
    delete<T extends ArtisanDeleteArgs>(args: SelectSubset<T, ArtisanDeleteArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artisan.
     * @param {ArtisanUpdateArgs} args - Arguments to update one Artisan.
     * @example
     * // Update one Artisan
     * const artisan = await prisma.artisan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtisanUpdateArgs>(args: SelectSubset<T, ArtisanUpdateArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artisans.
     * @param {ArtisanDeleteManyArgs} args - Arguments to filter Artisans to delete.
     * @example
     * // Delete a few Artisans
     * const { count } = await prisma.artisan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtisanDeleteManyArgs>(args?: SelectSubset<T, ArtisanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artisans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artisans
     * const artisan = await prisma.artisan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtisanUpdateManyArgs>(args: SelectSubset<T, ArtisanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artisans and returns the data updated in the database.
     * @param {ArtisanUpdateManyAndReturnArgs} args - Arguments to update many Artisans.
     * @example
     * // Update many Artisans
     * const artisan = await prisma.artisan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artisans and only return the `id`
     * const artisanWithIdOnly = await prisma.artisan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtisanUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtisanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artisan.
     * @param {ArtisanUpsertArgs} args - Arguments to update or create a Artisan.
     * @example
     * // Update or create a Artisan
     * const artisan = await prisma.artisan.upsert({
     *   create: {
     *     // ... data to create a Artisan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artisan we want to update
     *   }
     * })
     */
    upsert<T extends ArtisanUpsertArgs>(args: SelectSubset<T, ArtisanUpsertArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artisans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanCountArgs} args - Arguments to filter Artisans to count.
     * @example
     * // Count the number of Artisans
     * const count = await prisma.artisan.count({
     *   where: {
     *     // ... the filter for the Artisans we want to count
     *   }
     * })
    **/
    count<T extends ArtisanCountArgs>(
      args?: Subset<T, ArtisanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtisanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artisan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtisanAggregateArgs>(args: Subset<T, ArtisanAggregateArgs>): Prisma.PrismaPromise<GetArtisanAggregateType<T>>

    /**
     * Group by Artisan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtisanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtisanGroupByArgs['orderBy'] }
        : { orderBy?: ArtisanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtisanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtisanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artisan model
   */
  readonly fields: ArtisanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artisan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtisanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artisanMatches<T extends Artisan$artisanMatchesArgs<ExtArgs> = {}>(args?: Subset<T, Artisan$artisanMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Artisan$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Artisan$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderMessages<T extends Artisan$orderMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Artisan$orderMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artisan model
   */
  interface ArtisanFieldRefs {
    readonly id: FieldRef<"Artisan", 'String'>
    readonly createdAt: FieldRef<"Artisan", 'DateTime'>
    readonly updatedAt: FieldRef<"Artisan", 'DateTime'>
    readonly name: FieldRef<"Artisan", 'String'>
    readonly bio: FieldRef<"Artisan", 'String'>
    readonly avatarUrl: FieldRef<"Artisan", 'String'>
    readonly craftTags: FieldRef<"Artisan", 'Json'>
    readonly portfolio: FieldRef<"Artisan", 'Json'>
    readonly priceRangeMin: FieldRef<"Artisan", 'Int'>
    readonly priceRangeMax: FieldRef<"Artisan", 'Int'>
    readonly avgDays: FieldRef<"Artisan", 'Int'>
    readonly verified: FieldRef<"Artisan", 'Boolean'>
    readonly active: FieldRef<"Artisan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Artisan findUnique
   */
  export type ArtisanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan findUniqueOrThrow
   */
  export type ArtisanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan findFirst
   */
  export type ArtisanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan findFirstOrThrow
   */
  export type ArtisanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisan to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan findMany
   */
  export type ArtisanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter, which Artisans to fetch.
     */
    where?: ArtisanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artisans to fetch.
     */
    orderBy?: ArtisanOrderByWithRelationInput | ArtisanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artisans.
     */
    cursor?: ArtisanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artisans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artisans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artisans.
     */
    distinct?: ArtisanScalarFieldEnum | ArtisanScalarFieldEnum[]
  }

  /**
   * Artisan create
   */
  export type ArtisanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The data needed to create a Artisan.
     */
    data: XOR<ArtisanCreateInput, ArtisanUncheckedCreateInput>
  }

  /**
   * Artisan createMany
   */
  export type ArtisanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artisans.
     */
    data: ArtisanCreateManyInput | ArtisanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artisan createManyAndReturn
   */
  export type ArtisanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * The data used to create many Artisans.
     */
    data: ArtisanCreateManyInput | ArtisanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artisan update
   */
  export type ArtisanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The data needed to update a Artisan.
     */
    data: XOR<ArtisanUpdateInput, ArtisanUncheckedUpdateInput>
    /**
     * Choose, which Artisan to update.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan updateMany
   */
  export type ArtisanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artisans.
     */
    data: XOR<ArtisanUpdateManyMutationInput, ArtisanUncheckedUpdateManyInput>
    /**
     * Filter which Artisans to update
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to update.
     */
    limit?: number
  }

  /**
   * Artisan updateManyAndReturn
   */
  export type ArtisanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * The data used to update Artisans.
     */
    data: XOR<ArtisanUpdateManyMutationInput, ArtisanUncheckedUpdateManyInput>
    /**
     * Filter which Artisans to update
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to update.
     */
    limit?: number
  }

  /**
   * Artisan upsert
   */
  export type ArtisanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * The filter to search for the Artisan to update in case it exists.
     */
    where: ArtisanWhereUniqueInput
    /**
     * In case the Artisan found by the `where` argument doesn't exist, create a new Artisan with this data.
     */
    create: XOR<ArtisanCreateInput, ArtisanUncheckedCreateInput>
    /**
     * In case the Artisan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtisanUpdateInput, ArtisanUncheckedUpdateInput>
  }

  /**
   * Artisan delete
   */
  export type ArtisanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    /**
     * Filter which Artisan to delete.
     */
    where: ArtisanWhereUniqueInput
  }

  /**
   * Artisan deleteMany
   */
  export type ArtisanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artisans to delete
     */
    where?: ArtisanWhereInput
    /**
     * Limit how many Artisans to delete.
     */
    limit?: number
  }

  /**
   * Artisan.artisanMatches
   */
  export type Artisan$artisanMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    where?: ArtisanMatchWhereInput
    orderBy?: ArtisanMatchOrderByWithRelationInput | ArtisanMatchOrderByWithRelationInput[]
    cursor?: ArtisanMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtisanMatchScalarFieldEnum | ArtisanMatchScalarFieldEnum[]
  }

  /**
   * Artisan.orders
   */
  export type Artisan$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Artisan.orderMessages
   */
  export type Artisan$orderMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    where?: OrderMessageWhereInput
    orderBy?: OrderMessageOrderByWithRelationInput | OrderMessageOrderByWithRelationInput[]
    cursor?: OrderMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderMessageScalarFieldEnum | OrderMessageScalarFieldEnum[]
  }

  /**
   * Artisan without action
   */
  export type ArtisanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    requirementText: string | null
    preferredCraft: string | null
    budgetRange: string | null
    expectedDeliveryDate: string | null
    status: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    requirementText: string | null
    preferredCraft: string | null
    budgetRange: string | null
    expectedDeliveryDate: string | null
    status: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    images: number
    requirementText: number
    preferredCraft: number
    budgetRange: number
    expectedDeliveryDate: number
    status: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    requirementText?: true
    preferredCraft?: true
    budgetRange?: true
    expectedDeliveryDate?: true
    status?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    requirementText?: true
    preferredCraft?: true
    budgetRange?: true
    expectedDeliveryDate?: true
    status?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    images?: true
    requirementText?: true
    preferredCraft?: true
    budgetRange?: true
    expectedDeliveryDate?: true
    status?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    images: JsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status: string
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    images?: boolean
    requirementText?: boolean
    preferredCraft?: boolean
    budgetRange?: boolean
    expectedDeliveryDate?: boolean
    status?: boolean
    user?: boolean | Submission$userArgs<ExtArgs>
    structuredRequirement?: boolean | Submission$structuredRequirementArgs<ExtArgs>
    plan?: boolean | Submission$planArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    images?: boolean
    requirementText?: boolean
    preferredCraft?: boolean
    budgetRange?: boolean
    expectedDeliveryDate?: boolean
    status?: boolean
    user?: boolean | Submission$userArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    images?: boolean
    requirementText?: boolean
    preferredCraft?: boolean
    budgetRange?: boolean
    expectedDeliveryDate?: boolean
    status?: boolean
    user?: boolean | Submission$userArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    images?: boolean
    requirementText?: boolean
    preferredCraft?: boolean
    budgetRange?: boolean
    expectedDeliveryDate?: boolean
    status?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "images" | "requirementText" | "preferredCraft" | "budgetRange" | "expectedDeliveryDate" | "status", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Submission$userArgs<ExtArgs>
    structuredRequirement?: boolean | Submission$structuredRequirementArgs<ExtArgs>
    plan?: boolean | Submission$planArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Submission$userArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Submission$userArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      structuredRequirement: Prisma.$StructuredRequirementPayload<ExtArgs> | null
      plan: Prisma.$CraftPlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
      images: Prisma.JsonValue
      requirementText: string
      preferredCraft: string
      budgetRange: string
      expectedDeliveryDate: string
      status: string
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Submission$userArgs<ExtArgs> = {}>(args?: Subset<T, Submission$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    structuredRequirement<T extends Submission$structuredRequirementArgs<ExtArgs> = {}>(args?: Subset<T, Submission$structuredRequirementArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plan<T extends Submission$planArgs<ExtArgs> = {}>(args?: Subset<T, Submission$planArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly images: FieldRef<"Submission", 'Json'>
    readonly requirementText: FieldRef<"Submission", 'String'>
    readonly preferredCraft: FieldRef<"Submission", 'String'>
    readonly budgetRange: FieldRef<"Submission", 'String'>
    readonly expectedDeliveryDate: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.user
   */
  export type Submission$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Submission.structuredRequirement
   */
  export type Submission$structuredRequirementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    where?: StructuredRequirementWhereInput
  }

  /**
   * Submission.plan
   */
  export type Submission$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    where?: CraftPlanWhereInput
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model StructuredRequirement
   */

  export type AggregateStructuredRequirement = {
    _count: StructuredRequirementCountAggregateOutputType | null
    _min: StructuredRequirementMinAggregateOutputType | null
    _max: StructuredRequirementMaxAggregateOutputType | null
  }

  export type StructuredRequirementMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
    category: string | null
    style: string | null
    craftPreference: string | null
    materialPreference: string | null
    colorPreference: string | null
    budgetRange: string | null
    deliveryDate: string | null
    acceptableVariance: string | null
    acceptsModification: boolean | null
    status: string | null
    aiMode: string | null
  }

  export type StructuredRequirementMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
    category: string | null
    style: string | null
    craftPreference: string | null
    materialPreference: string | null
    colorPreference: string | null
    budgetRange: string | null
    deliveryDate: string | null
    acceptableVariance: string | null
    acceptsModification: boolean | null
    status: string | null
    aiMode: string | null
  }

  export type StructuredRequirementCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    submissionId: number
    category: number
    style: number
    craftPreference: number
    materialPreference: number
    colorPreference: number
    budgetRange: number
    deliveryDate: number
    acceptableVariance: number
    acceptsModification: number
    status: number
    aiMode: number
    rawResponse: number
    _all: number
  }


  export type StructuredRequirementMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    category?: true
    style?: true
    craftPreference?: true
    materialPreference?: true
    colorPreference?: true
    budgetRange?: true
    deliveryDate?: true
    acceptableVariance?: true
    acceptsModification?: true
    status?: true
    aiMode?: true
  }

  export type StructuredRequirementMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    category?: true
    style?: true
    craftPreference?: true
    materialPreference?: true
    colorPreference?: true
    budgetRange?: true
    deliveryDate?: true
    acceptableVariance?: true
    acceptsModification?: true
    status?: true
    aiMode?: true
  }

  export type StructuredRequirementCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    category?: true
    style?: true
    craftPreference?: true
    materialPreference?: true
    colorPreference?: true
    budgetRange?: true
    deliveryDate?: true
    acceptableVariance?: true
    acceptsModification?: true
    status?: true
    aiMode?: true
    rawResponse?: true
    _all?: true
  }

  export type StructuredRequirementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StructuredRequirement to aggregate.
     */
    where?: StructuredRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StructuredRequirements to fetch.
     */
    orderBy?: StructuredRequirementOrderByWithRelationInput | StructuredRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StructuredRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StructuredRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StructuredRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StructuredRequirements
    **/
    _count?: true | StructuredRequirementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StructuredRequirementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StructuredRequirementMaxAggregateInputType
  }

  export type GetStructuredRequirementAggregateType<T extends StructuredRequirementAggregateArgs> = {
        [P in keyof T & keyof AggregateStructuredRequirement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStructuredRequirement[P]>
      : GetScalarType<T[P], AggregateStructuredRequirement[P]>
  }




  export type StructuredRequirementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StructuredRequirementWhereInput
    orderBy?: StructuredRequirementOrderByWithAggregationInput | StructuredRequirementOrderByWithAggregationInput[]
    by: StructuredRequirementScalarFieldEnum[] | StructuredRequirementScalarFieldEnum
    having?: StructuredRequirementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StructuredRequirementCountAggregateInputType | true
    _min?: StructuredRequirementMinAggregateInputType
    _max?: StructuredRequirementMaxAggregateInputType
  }

  export type StructuredRequirementGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    submissionId: string
    category: string
    style: string
    craftPreference: string
    materialPreference: string
    colorPreference: string
    budgetRange: string
    deliveryDate: string
    acceptableVariance: string
    acceptsModification: boolean
    status: string
    aiMode: string
    rawResponse: JsonValue | null
    _count: StructuredRequirementCountAggregateOutputType | null
    _min: StructuredRequirementMinAggregateOutputType | null
    _max: StructuredRequirementMaxAggregateOutputType | null
  }

  type GetStructuredRequirementGroupByPayload<T extends StructuredRequirementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StructuredRequirementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StructuredRequirementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StructuredRequirementGroupByOutputType[P]>
            : GetScalarType<T[P], StructuredRequirementGroupByOutputType[P]>
        }
      >
    >


  export type StructuredRequirementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    category?: boolean
    style?: boolean
    craftPreference?: boolean
    materialPreference?: boolean
    colorPreference?: boolean
    budgetRange?: boolean
    deliveryDate?: boolean
    acceptableVariance?: boolean
    acceptsModification?: boolean
    status?: boolean
    aiMode?: boolean
    rawResponse?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["structuredRequirement"]>

  export type StructuredRequirementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    category?: boolean
    style?: boolean
    craftPreference?: boolean
    materialPreference?: boolean
    colorPreference?: boolean
    budgetRange?: boolean
    deliveryDate?: boolean
    acceptableVariance?: boolean
    acceptsModification?: boolean
    status?: boolean
    aiMode?: boolean
    rawResponse?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["structuredRequirement"]>

  export type StructuredRequirementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    category?: boolean
    style?: boolean
    craftPreference?: boolean
    materialPreference?: boolean
    colorPreference?: boolean
    budgetRange?: boolean
    deliveryDate?: boolean
    acceptableVariance?: boolean
    acceptsModification?: boolean
    status?: boolean
    aiMode?: boolean
    rawResponse?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["structuredRequirement"]>

  export type StructuredRequirementSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    category?: boolean
    style?: boolean
    craftPreference?: boolean
    materialPreference?: boolean
    colorPreference?: boolean
    budgetRange?: boolean
    deliveryDate?: boolean
    acceptableVariance?: boolean
    acceptsModification?: boolean
    status?: boolean
    aiMode?: boolean
    rawResponse?: boolean
  }

  export type StructuredRequirementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "submissionId" | "category" | "style" | "craftPreference" | "materialPreference" | "colorPreference" | "budgetRange" | "deliveryDate" | "acceptableVariance" | "acceptsModification" | "status" | "aiMode" | "rawResponse", ExtArgs["result"]["structuredRequirement"]>
  export type StructuredRequirementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type StructuredRequirementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type StructuredRequirementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $StructuredRequirementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StructuredRequirement"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      submissionId: string
      category: string
      style: string
      craftPreference: string
      materialPreference: string
      colorPreference: string
      budgetRange: string
      deliveryDate: string
      acceptableVariance: string
      acceptsModification: boolean
      status: string
      aiMode: string
      rawResponse: Prisma.JsonValue | null
    }, ExtArgs["result"]["structuredRequirement"]>
    composites: {}
  }

  type StructuredRequirementGetPayload<S extends boolean | null | undefined | StructuredRequirementDefaultArgs> = $Result.GetResult<Prisma.$StructuredRequirementPayload, S>

  type StructuredRequirementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StructuredRequirementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StructuredRequirementCountAggregateInputType | true
    }

  export interface StructuredRequirementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StructuredRequirement'], meta: { name: 'StructuredRequirement' } }
    /**
     * Find zero or one StructuredRequirement that matches the filter.
     * @param {StructuredRequirementFindUniqueArgs} args - Arguments to find a StructuredRequirement
     * @example
     * // Get one StructuredRequirement
     * const structuredRequirement = await prisma.structuredRequirement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StructuredRequirementFindUniqueArgs>(args: SelectSubset<T, StructuredRequirementFindUniqueArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StructuredRequirement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StructuredRequirementFindUniqueOrThrowArgs} args - Arguments to find a StructuredRequirement
     * @example
     * // Get one StructuredRequirement
     * const structuredRequirement = await prisma.structuredRequirement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StructuredRequirementFindUniqueOrThrowArgs>(args: SelectSubset<T, StructuredRequirementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StructuredRequirement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuredRequirementFindFirstArgs} args - Arguments to find a StructuredRequirement
     * @example
     * // Get one StructuredRequirement
     * const structuredRequirement = await prisma.structuredRequirement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StructuredRequirementFindFirstArgs>(args?: SelectSubset<T, StructuredRequirementFindFirstArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StructuredRequirement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuredRequirementFindFirstOrThrowArgs} args - Arguments to find a StructuredRequirement
     * @example
     * // Get one StructuredRequirement
     * const structuredRequirement = await prisma.structuredRequirement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StructuredRequirementFindFirstOrThrowArgs>(args?: SelectSubset<T, StructuredRequirementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StructuredRequirements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuredRequirementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StructuredRequirements
     * const structuredRequirements = await prisma.structuredRequirement.findMany()
     * 
     * // Get first 10 StructuredRequirements
     * const structuredRequirements = await prisma.structuredRequirement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const structuredRequirementWithIdOnly = await prisma.structuredRequirement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StructuredRequirementFindManyArgs>(args?: SelectSubset<T, StructuredRequirementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StructuredRequirement.
     * @param {StructuredRequirementCreateArgs} args - Arguments to create a StructuredRequirement.
     * @example
     * // Create one StructuredRequirement
     * const StructuredRequirement = await prisma.structuredRequirement.create({
     *   data: {
     *     // ... data to create a StructuredRequirement
     *   }
     * })
     * 
     */
    create<T extends StructuredRequirementCreateArgs>(args: SelectSubset<T, StructuredRequirementCreateArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StructuredRequirements.
     * @param {StructuredRequirementCreateManyArgs} args - Arguments to create many StructuredRequirements.
     * @example
     * // Create many StructuredRequirements
     * const structuredRequirement = await prisma.structuredRequirement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StructuredRequirementCreateManyArgs>(args?: SelectSubset<T, StructuredRequirementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StructuredRequirements and returns the data saved in the database.
     * @param {StructuredRequirementCreateManyAndReturnArgs} args - Arguments to create many StructuredRequirements.
     * @example
     * // Create many StructuredRequirements
     * const structuredRequirement = await prisma.structuredRequirement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StructuredRequirements and only return the `id`
     * const structuredRequirementWithIdOnly = await prisma.structuredRequirement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StructuredRequirementCreateManyAndReturnArgs>(args?: SelectSubset<T, StructuredRequirementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StructuredRequirement.
     * @param {StructuredRequirementDeleteArgs} args - Arguments to delete one StructuredRequirement.
     * @example
     * // Delete one StructuredRequirement
     * const StructuredRequirement = await prisma.structuredRequirement.delete({
     *   where: {
     *     // ... filter to delete one StructuredRequirement
     *   }
     * })
     * 
     */
    delete<T extends StructuredRequirementDeleteArgs>(args: SelectSubset<T, StructuredRequirementDeleteArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StructuredRequirement.
     * @param {StructuredRequirementUpdateArgs} args - Arguments to update one StructuredRequirement.
     * @example
     * // Update one StructuredRequirement
     * const structuredRequirement = await prisma.structuredRequirement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StructuredRequirementUpdateArgs>(args: SelectSubset<T, StructuredRequirementUpdateArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StructuredRequirements.
     * @param {StructuredRequirementDeleteManyArgs} args - Arguments to filter StructuredRequirements to delete.
     * @example
     * // Delete a few StructuredRequirements
     * const { count } = await prisma.structuredRequirement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StructuredRequirementDeleteManyArgs>(args?: SelectSubset<T, StructuredRequirementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StructuredRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuredRequirementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StructuredRequirements
     * const structuredRequirement = await prisma.structuredRequirement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StructuredRequirementUpdateManyArgs>(args: SelectSubset<T, StructuredRequirementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StructuredRequirements and returns the data updated in the database.
     * @param {StructuredRequirementUpdateManyAndReturnArgs} args - Arguments to update many StructuredRequirements.
     * @example
     * // Update many StructuredRequirements
     * const structuredRequirement = await prisma.structuredRequirement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StructuredRequirements and only return the `id`
     * const structuredRequirementWithIdOnly = await prisma.structuredRequirement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StructuredRequirementUpdateManyAndReturnArgs>(args: SelectSubset<T, StructuredRequirementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StructuredRequirement.
     * @param {StructuredRequirementUpsertArgs} args - Arguments to update or create a StructuredRequirement.
     * @example
     * // Update or create a StructuredRequirement
     * const structuredRequirement = await prisma.structuredRequirement.upsert({
     *   create: {
     *     // ... data to create a StructuredRequirement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StructuredRequirement we want to update
     *   }
     * })
     */
    upsert<T extends StructuredRequirementUpsertArgs>(args: SelectSubset<T, StructuredRequirementUpsertArgs<ExtArgs>>): Prisma__StructuredRequirementClient<$Result.GetResult<Prisma.$StructuredRequirementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StructuredRequirements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuredRequirementCountArgs} args - Arguments to filter StructuredRequirements to count.
     * @example
     * // Count the number of StructuredRequirements
     * const count = await prisma.structuredRequirement.count({
     *   where: {
     *     // ... the filter for the StructuredRequirements we want to count
     *   }
     * })
    **/
    count<T extends StructuredRequirementCountArgs>(
      args?: Subset<T, StructuredRequirementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StructuredRequirementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StructuredRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuredRequirementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StructuredRequirementAggregateArgs>(args: Subset<T, StructuredRequirementAggregateArgs>): Prisma.PrismaPromise<GetStructuredRequirementAggregateType<T>>

    /**
     * Group by StructuredRequirement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructuredRequirementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StructuredRequirementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StructuredRequirementGroupByArgs['orderBy'] }
        : { orderBy?: StructuredRequirementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StructuredRequirementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStructuredRequirementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StructuredRequirement model
   */
  readonly fields: StructuredRequirementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StructuredRequirement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StructuredRequirementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StructuredRequirement model
   */
  interface StructuredRequirementFieldRefs {
    readonly id: FieldRef<"StructuredRequirement", 'String'>
    readonly createdAt: FieldRef<"StructuredRequirement", 'DateTime'>
    readonly updatedAt: FieldRef<"StructuredRequirement", 'DateTime'>
    readonly submissionId: FieldRef<"StructuredRequirement", 'String'>
    readonly category: FieldRef<"StructuredRequirement", 'String'>
    readonly style: FieldRef<"StructuredRequirement", 'String'>
    readonly craftPreference: FieldRef<"StructuredRequirement", 'String'>
    readonly materialPreference: FieldRef<"StructuredRequirement", 'String'>
    readonly colorPreference: FieldRef<"StructuredRequirement", 'String'>
    readonly budgetRange: FieldRef<"StructuredRequirement", 'String'>
    readonly deliveryDate: FieldRef<"StructuredRequirement", 'String'>
    readonly acceptableVariance: FieldRef<"StructuredRequirement", 'String'>
    readonly acceptsModification: FieldRef<"StructuredRequirement", 'Boolean'>
    readonly status: FieldRef<"StructuredRequirement", 'String'>
    readonly aiMode: FieldRef<"StructuredRequirement", 'String'>
    readonly rawResponse: FieldRef<"StructuredRequirement", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * StructuredRequirement findUnique
   */
  export type StructuredRequirementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * Filter, which StructuredRequirement to fetch.
     */
    where: StructuredRequirementWhereUniqueInput
  }

  /**
   * StructuredRequirement findUniqueOrThrow
   */
  export type StructuredRequirementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * Filter, which StructuredRequirement to fetch.
     */
    where: StructuredRequirementWhereUniqueInput
  }

  /**
   * StructuredRequirement findFirst
   */
  export type StructuredRequirementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * Filter, which StructuredRequirement to fetch.
     */
    where?: StructuredRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StructuredRequirements to fetch.
     */
    orderBy?: StructuredRequirementOrderByWithRelationInput | StructuredRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StructuredRequirements.
     */
    cursor?: StructuredRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StructuredRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StructuredRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StructuredRequirements.
     */
    distinct?: StructuredRequirementScalarFieldEnum | StructuredRequirementScalarFieldEnum[]
  }

  /**
   * StructuredRequirement findFirstOrThrow
   */
  export type StructuredRequirementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * Filter, which StructuredRequirement to fetch.
     */
    where?: StructuredRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StructuredRequirements to fetch.
     */
    orderBy?: StructuredRequirementOrderByWithRelationInput | StructuredRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StructuredRequirements.
     */
    cursor?: StructuredRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StructuredRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StructuredRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StructuredRequirements.
     */
    distinct?: StructuredRequirementScalarFieldEnum | StructuredRequirementScalarFieldEnum[]
  }

  /**
   * StructuredRequirement findMany
   */
  export type StructuredRequirementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * Filter, which StructuredRequirements to fetch.
     */
    where?: StructuredRequirementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StructuredRequirements to fetch.
     */
    orderBy?: StructuredRequirementOrderByWithRelationInput | StructuredRequirementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StructuredRequirements.
     */
    cursor?: StructuredRequirementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StructuredRequirements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StructuredRequirements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StructuredRequirements.
     */
    distinct?: StructuredRequirementScalarFieldEnum | StructuredRequirementScalarFieldEnum[]
  }

  /**
   * StructuredRequirement create
   */
  export type StructuredRequirementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * The data needed to create a StructuredRequirement.
     */
    data: XOR<StructuredRequirementCreateInput, StructuredRequirementUncheckedCreateInput>
  }

  /**
   * StructuredRequirement createMany
   */
  export type StructuredRequirementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StructuredRequirements.
     */
    data: StructuredRequirementCreateManyInput | StructuredRequirementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StructuredRequirement createManyAndReturn
   */
  export type StructuredRequirementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * The data used to create many StructuredRequirements.
     */
    data: StructuredRequirementCreateManyInput | StructuredRequirementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StructuredRequirement update
   */
  export type StructuredRequirementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * The data needed to update a StructuredRequirement.
     */
    data: XOR<StructuredRequirementUpdateInput, StructuredRequirementUncheckedUpdateInput>
    /**
     * Choose, which StructuredRequirement to update.
     */
    where: StructuredRequirementWhereUniqueInput
  }

  /**
   * StructuredRequirement updateMany
   */
  export type StructuredRequirementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StructuredRequirements.
     */
    data: XOR<StructuredRequirementUpdateManyMutationInput, StructuredRequirementUncheckedUpdateManyInput>
    /**
     * Filter which StructuredRequirements to update
     */
    where?: StructuredRequirementWhereInput
    /**
     * Limit how many StructuredRequirements to update.
     */
    limit?: number
  }

  /**
   * StructuredRequirement updateManyAndReturn
   */
  export type StructuredRequirementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * The data used to update StructuredRequirements.
     */
    data: XOR<StructuredRequirementUpdateManyMutationInput, StructuredRequirementUncheckedUpdateManyInput>
    /**
     * Filter which StructuredRequirements to update
     */
    where?: StructuredRequirementWhereInput
    /**
     * Limit how many StructuredRequirements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StructuredRequirement upsert
   */
  export type StructuredRequirementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * The filter to search for the StructuredRequirement to update in case it exists.
     */
    where: StructuredRequirementWhereUniqueInput
    /**
     * In case the StructuredRequirement found by the `where` argument doesn't exist, create a new StructuredRequirement with this data.
     */
    create: XOR<StructuredRequirementCreateInput, StructuredRequirementUncheckedCreateInput>
    /**
     * In case the StructuredRequirement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StructuredRequirementUpdateInput, StructuredRequirementUncheckedUpdateInput>
  }

  /**
   * StructuredRequirement delete
   */
  export type StructuredRequirementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
    /**
     * Filter which StructuredRequirement to delete.
     */
    where: StructuredRequirementWhereUniqueInput
  }

  /**
   * StructuredRequirement deleteMany
   */
  export type StructuredRequirementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StructuredRequirements to delete
     */
    where?: StructuredRequirementWhereInput
    /**
     * Limit how many StructuredRequirements to delete.
     */
    limit?: number
  }

  /**
   * StructuredRequirement without action
   */
  export type StructuredRequirementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StructuredRequirement
     */
    select?: StructuredRequirementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StructuredRequirement
     */
    omit?: StructuredRequirementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructuredRequirementInclude<ExtArgs> | null
  }


  /**
   * Model CraftPlan
   */

  export type AggregateCraftPlan = {
    _count: CraftPlanCountAggregateOutputType | null
    _min: CraftPlanMinAggregateOutputType | null
    _max: CraftPlanMaxAggregateOutputType | null
  }

  export type CraftPlanMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
    structuredRequirementId: string | null
    recommendedCraft: string | null
    recommendationReason: string | null
    planSummary: string | null
    timelineRange: string | null
    priceRange: string | null
    status: string | null
    aiMode: string | null
  }

  export type CraftPlanMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
    structuredRequirementId: string | null
    recommendedCraft: string | null
    recommendationReason: string | null
    planSummary: string | null
    timelineRange: string | null
    priceRange: string | null
    status: string | null
    aiMode: string | null
  }

  export type CraftPlanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    submissionId: number
    structuredRequirementId: number
    recommendedCraft: number
    recommendationReason: number
    planSummary: number
    riskNotes: number
    timelineRange: number
    priceRange: number
    status: number
    aiMode: number
    rawResponse: number
    _all: number
  }


  export type CraftPlanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    structuredRequirementId?: true
    recommendedCraft?: true
    recommendationReason?: true
    planSummary?: true
    timelineRange?: true
    priceRange?: true
    status?: true
    aiMode?: true
  }

  export type CraftPlanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    structuredRequirementId?: true
    recommendedCraft?: true
    recommendationReason?: true
    planSummary?: true
    timelineRange?: true
    priceRange?: true
    status?: true
    aiMode?: true
  }

  export type CraftPlanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    structuredRequirementId?: true
    recommendedCraft?: true
    recommendationReason?: true
    planSummary?: true
    riskNotes?: true
    timelineRange?: true
    priceRange?: true
    status?: true
    aiMode?: true
    rawResponse?: true
    _all?: true
  }

  export type CraftPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CraftPlan to aggregate.
     */
    where?: CraftPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CraftPlans to fetch.
     */
    orderBy?: CraftPlanOrderByWithRelationInput | CraftPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CraftPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CraftPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CraftPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CraftPlans
    **/
    _count?: true | CraftPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CraftPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CraftPlanMaxAggregateInputType
  }

  export type GetCraftPlanAggregateType<T extends CraftPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateCraftPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCraftPlan[P]>
      : GetScalarType<T[P], AggregateCraftPlan[P]>
  }




  export type CraftPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CraftPlanWhereInput
    orderBy?: CraftPlanOrderByWithAggregationInput | CraftPlanOrderByWithAggregationInput[]
    by: CraftPlanScalarFieldEnum[] | CraftPlanScalarFieldEnum
    having?: CraftPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CraftPlanCountAggregateInputType | true
    _min?: CraftPlanMinAggregateInputType
    _max?: CraftPlanMaxAggregateInputType
  }

  export type CraftPlanGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    submissionId: string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonValue
    timelineRange: string
    priceRange: string
    status: string
    aiMode: string
    rawResponse: JsonValue | null
    _count: CraftPlanCountAggregateOutputType | null
    _min: CraftPlanMinAggregateOutputType | null
    _max: CraftPlanMaxAggregateOutputType | null
  }

  type GetCraftPlanGroupByPayload<T extends CraftPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CraftPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CraftPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CraftPlanGroupByOutputType[P]>
            : GetScalarType<T[P], CraftPlanGroupByOutputType[P]>
        }
      >
    >


  export type CraftPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    structuredRequirementId?: boolean
    recommendedCraft?: boolean
    recommendationReason?: boolean
    planSummary?: boolean
    riskNotes?: boolean
    timelineRange?: boolean
    priceRange?: boolean
    status?: boolean
    aiMode?: boolean
    rawResponse?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    preview?: boolean | CraftPlan$previewArgs<ExtArgs>
    artisanMatches?: boolean | CraftPlan$artisanMatchesArgs<ExtArgs>
    designConfirmation?: boolean | CraftPlan$designConfirmationArgs<ExtArgs>
    _count?: boolean | CraftPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["craftPlan"]>

  export type CraftPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    structuredRequirementId?: boolean
    recommendedCraft?: boolean
    recommendationReason?: boolean
    planSummary?: boolean
    riskNotes?: boolean
    timelineRange?: boolean
    priceRange?: boolean
    status?: boolean
    aiMode?: boolean
    rawResponse?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["craftPlan"]>

  export type CraftPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    structuredRequirementId?: boolean
    recommendedCraft?: boolean
    recommendationReason?: boolean
    planSummary?: boolean
    riskNotes?: boolean
    timelineRange?: boolean
    priceRange?: boolean
    status?: boolean
    aiMode?: boolean
    rawResponse?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["craftPlan"]>

  export type CraftPlanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    structuredRequirementId?: boolean
    recommendedCraft?: boolean
    recommendationReason?: boolean
    planSummary?: boolean
    riskNotes?: boolean
    timelineRange?: boolean
    priceRange?: boolean
    status?: boolean
    aiMode?: boolean
    rawResponse?: boolean
  }

  export type CraftPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "submissionId" | "structuredRequirementId" | "recommendedCraft" | "recommendationReason" | "planSummary" | "riskNotes" | "timelineRange" | "priceRange" | "status" | "aiMode" | "rawResponse", ExtArgs["result"]["craftPlan"]>
  export type CraftPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    preview?: boolean | CraftPlan$previewArgs<ExtArgs>
    artisanMatches?: boolean | CraftPlan$artisanMatchesArgs<ExtArgs>
    designConfirmation?: boolean | CraftPlan$designConfirmationArgs<ExtArgs>
    _count?: boolean | CraftPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CraftPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type CraftPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $CraftPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CraftPlan"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
      preview: Prisma.$PreviewResultPayload<ExtArgs> | null
      artisanMatches: Prisma.$ArtisanMatchPayload<ExtArgs>[]
      designConfirmation: Prisma.$DesignConfirmationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      submissionId: string
      structuredRequirementId: string
      recommendedCraft: string
      recommendationReason: string
      planSummary: string
      riskNotes: Prisma.JsonValue
      timelineRange: string
      priceRange: string
      status: string
      aiMode: string
      rawResponse: Prisma.JsonValue | null
    }, ExtArgs["result"]["craftPlan"]>
    composites: {}
  }

  type CraftPlanGetPayload<S extends boolean | null | undefined | CraftPlanDefaultArgs> = $Result.GetResult<Prisma.$CraftPlanPayload, S>

  type CraftPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CraftPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CraftPlanCountAggregateInputType | true
    }

  export interface CraftPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CraftPlan'], meta: { name: 'CraftPlan' } }
    /**
     * Find zero or one CraftPlan that matches the filter.
     * @param {CraftPlanFindUniqueArgs} args - Arguments to find a CraftPlan
     * @example
     * // Get one CraftPlan
     * const craftPlan = await prisma.craftPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CraftPlanFindUniqueArgs>(args: SelectSubset<T, CraftPlanFindUniqueArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CraftPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CraftPlanFindUniqueOrThrowArgs} args - Arguments to find a CraftPlan
     * @example
     * // Get one CraftPlan
     * const craftPlan = await prisma.craftPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CraftPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, CraftPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CraftPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CraftPlanFindFirstArgs} args - Arguments to find a CraftPlan
     * @example
     * // Get one CraftPlan
     * const craftPlan = await prisma.craftPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CraftPlanFindFirstArgs>(args?: SelectSubset<T, CraftPlanFindFirstArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CraftPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CraftPlanFindFirstOrThrowArgs} args - Arguments to find a CraftPlan
     * @example
     * // Get one CraftPlan
     * const craftPlan = await prisma.craftPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CraftPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, CraftPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CraftPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CraftPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CraftPlans
     * const craftPlans = await prisma.craftPlan.findMany()
     * 
     * // Get first 10 CraftPlans
     * const craftPlans = await prisma.craftPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const craftPlanWithIdOnly = await prisma.craftPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CraftPlanFindManyArgs>(args?: SelectSubset<T, CraftPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CraftPlan.
     * @param {CraftPlanCreateArgs} args - Arguments to create a CraftPlan.
     * @example
     * // Create one CraftPlan
     * const CraftPlan = await prisma.craftPlan.create({
     *   data: {
     *     // ... data to create a CraftPlan
     *   }
     * })
     * 
     */
    create<T extends CraftPlanCreateArgs>(args: SelectSubset<T, CraftPlanCreateArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CraftPlans.
     * @param {CraftPlanCreateManyArgs} args - Arguments to create many CraftPlans.
     * @example
     * // Create many CraftPlans
     * const craftPlan = await prisma.craftPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CraftPlanCreateManyArgs>(args?: SelectSubset<T, CraftPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CraftPlans and returns the data saved in the database.
     * @param {CraftPlanCreateManyAndReturnArgs} args - Arguments to create many CraftPlans.
     * @example
     * // Create many CraftPlans
     * const craftPlan = await prisma.craftPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CraftPlans and only return the `id`
     * const craftPlanWithIdOnly = await prisma.craftPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CraftPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, CraftPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CraftPlan.
     * @param {CraftPlanDeleteArgs} args - Arguments to delete one CraftPlan.
     * @example
     * // Delete one CraftPlan
     * const CraftPlan = await prisma.craftPlan.delete({
     *   where: {
     *     // ... filter to delete one CraftPlan
     *   }
     * })
     * 
     */
    delete<T extends CraftPlanDeleteArgs>(args: SelectSubset<T, CraftPlanDeleteArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CraftPlan.
     * @param {CraftPlanUpdateArgs} args - Arguments to update one CraftPlan.
     * @example
     * // Update one CraftPlan
     * const craftPlan = await prisma.craftPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CraftPlanUpdateArgs>(args: SelectSubset<T, CraftPlanUpdateArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CraftPlans.
     * @param {CraftPlanDeleteManyArgs} args - Arguments to filter CraftPlans to delete.
     * @example
     * // Delete a few CraftPlans
     * const { count } = await prisma.craftPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CraftPlanDeleteManyArgs>(args?: SelectSubset<T, CraftPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CraftPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CraftPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CraftPlans
     * const craftPlan = await prisma.craftPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CraftPlanUpdateManyArgs>(args: SelectSubset<T, CraftPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CraftPlans and returns the data updated in the database.
     * @param {CraftPlanUpdateManyAndReturnArgs} args - Arguments to update many CraftPlans.
     * @example
     * // Update many CraftPlans
     * const craftPlan = await prisma.craftPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CraftPlans and only return the `id`
     * const craftPlanWithIdOnly = await prisma.craftPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CraftPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, CraftPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CraftPlan.
     * @param {CraftPlanUpsertArgs} args - Arguments to update or create a CraftPlan.
     * @example
     * // Update or create a CraftPlan
     * const craftPlan = await prisma.craftPlan.upsert({
     *   create: {
     *     // ... data to create a CraftPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CraftPlan we want to update
     *   }
     * })
     */
    upsert<T extends CraftPlanUpsertArgs>(args: SelectSubset<T, CraftPlanUpsertArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CraftPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CraftPlanCountArgs} args - Arguments to filter CraftPlans to count.
     * @example
     * // Count the number of CraftPlans
     * const count = await prisma.craftPlan.count({
     *   where: {
     *     // ... the filter for the CraftPlans we want to count
     *   }
     * })
    **/
    count<T extends CraftPlanCountArgs>(
      args?: Subset<T, CraftPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CraftPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CraftPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CraftPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CraftPlanAggregateArgs>(args: Subset<T, CraftPlanAggregateArgs>): Prisma.PrismaPromise<GetCraftPlanAggregateType<T>>

    /**
     * Group by CraftPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CraftPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CraftPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CraftPlanGroupByArgs['orderBy'] }
        : { orderBy?: CraftPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CraftPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCraftPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CraftPlan model
   */
  readonly fields: CraftPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CraftPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CraftPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preview<T extends CraftPlan$previewArgs<ExtArgs> = {}>(args?: Subset<T, CraftPlan$previewArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    artisanMatches<T extends CraftPlan$artisanMatchesArgs<ExtArgs> = {}>(args?: Subset<T, CraftPlan$artisanMatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    designConfirmation<T extends CraftPlan$designConfirmationArgs<ExtArgs> = {}>(args?: Subset<T, CraftPlan$designConfirmationArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CraftPlan model
   */
  interface CraftPlanFieldRefs {
    readonly id: FieldRef<"CraftPlan", 'String'>
    readonly createdAt: FieldRef<"CraftPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"CraftPlan", 'DateTime'>
    readonly submissionId: FieldRef<"CraftPlan", 'String'>
    readonly structuredRequirementId: FieldRef<"CraftPlan", 'String'>
    readonly recommendedCraft: FieldRef<"CraftPlan", 'String'>
    readonly recommendationReason: FieldRef<"CraftPlan", 'String'>
    readonly planSummary: FieldRef<"CraftPlan", 'String'>
    readonly riskNotes: FieldRef<"CraftPlan", 'Json'>
    readonly timelineRange: FieldRef<"CraftPlan", 'String'>
    readonly priceRange: FieldRef<"CraftPlan", 'String'>
    readonly status: FieldRef<"CraftPlan", 'String'>
    readonly aiMode: FieldRef<"CraftPlan", 'String'>
    readonly rawResponse: FieldRef<"CraftPlan", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * CraftPlan findUnique
   */
  export type CraftPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * Filter, which CraftPlan to fetch.
     */
    where: CraftPlanWhereUniqueInput
  }

  /**
   * CraftPlan findUniqueOrThrow
   */
  export type CraftPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * Filter, which CraftPlan to fetch.
     */
    where: CraftPlanWhereUniqueInput
  }

  /**
   * CraftPlan findFirst
   */
  export type CraftPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * Filter, which CraftPlan to fetch.
     */
    where?: CraftPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CraftPlans to fetch.
     */
    orderBy?: CraftPlanOrderByWithRelationInput | CraftPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CraftPlans.
     */
    cursor?: CraftPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CraftPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CraftPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CraftPlans.
     */
    distinct?: CraftPlanScalarFieldEnum | CraftPlanScalarFieldEnum[]
  }

  /**
   * CraftPlan findFirstOrThrow
   */
  export type CraftPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * Filter, which CraftPlan to fetch.
     */
    where?: CraftPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CraftPlans to fetch.
     */
    orderBy?: CraftPlanOrderByWithRelationInput | CraftPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CraftPlans.
     */
    cursor?: CraftPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CraftPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CraftPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CraftPlans.
     */
    distinct?: CraftPlanScalarFieldEnum | CraftPlanScalarFieldEnum[]
  }

  /**
   * CraftPlan findMany
   */
  export type CraftPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * Filter, which CraftPlans to fetch.
     */
    where?: CraftPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CraftPlans to fetch.
     */
    orderBy?: CraftPlanOrderByWithRelationInput | CraftPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CraftPlans.
     */
    cursor?: CraftPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CraftPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CraftPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CraftPlans.
     */
    distinct?: CraftPlanScalarFieldEnum | CraftPlanScalarFieldEnum[]
  }

  /**
   * CraftPlan create
   */
  export type CraftPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a CraftPlan.
     */
    data: XOR<CraftPlanCreateInput, CraftPlanUncheckedCreateInput>
  }

  /**
   * CraftPlan createMany
   */
  export type CraftPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CraftPlans.
     */
    data: CraftPlanCreateManyInput | CraftPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CraftPlan createManyAndReturn
   */
  export type CraftPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * The data used to create many CraftPlans.
     */
    data: CraftPlanCreateManyInput | CraftPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CraftPlan update
   */
  export type CraftPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a CraftPlan.
     */
    data: XOR<CraftPlanUpdateInput, CraftPlanUncheckedUpdateInput>
    /**
     * Choose, which CraftPlan to update.
     */
    where: CraftPlanWhereUniqueInput
  }

  /**
   * CraftPlan updateMany
   */
  export type CraftPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CraftPlans.
     */
    data: XOR<CraftPlanUpdateManyMutationInput, CraftPlanUncheckedUpdateManyInput>
    /**
     * Filter which CraftPlans to update
     */
    where?: CraftPlanWhereInput
    /**
     * Limit how many CraftPlans to update.
     */
    limit?: number
  }

  /**
   * CraftPlan updateManyAndReturn
   */
  export type CraftPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * The data used to update CraftPlans.
     */
    data: XOR<CraftPlanUpdateManyMutationInput, CraftPlanUncheckedUpdateManyInput>
    /**
     * Filter which CraftPlans to update
     */
    where?: CraftPlanWhereInput
    /**
     * Limit how many CraftPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CraftPlan upsert
   */
  export type CraftPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the CraftPlan to update in case it exists.
     */
    where: CraftPlanWhereUniqueInput
    /**
     * In case the CraftPlan found by the `where` argument doesn't exist, create a new CraftPlan with this data.
     */
    create: XOR<CraftPlanCreateInput, CraftPlanUncheckedCreateInput>
    /**
     * In case the CraftPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CraftPlanUpdateInput, CraftPlanUncheckedUpdateInput>
  }

  /**
   * CraftPlan delete
   */
  export type CraftPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
    /**
     * Filter which CraftPlan to delete.
     */
    where: CraftPlanWhereUniqueInput
  }

  /**
   * CraftPlan deleteMany
   */
  export type CraftPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CraftPlans to delete
     */
    where?: CraftPlanWhereInput
    /**
     * Limit how many CraftPlans to delete.
     */
    limit?: number
  }

  /**
   * CraftPlan.preview
   */
  export type CraftPlan$previewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    where?: PreviewResultWhereInput
  }

  /**
   * CraftPlan.artisanMatches
   */
  export type CraftPlan$artisanMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    where?: ArtisanMatchWhereInput
    orderBy?: ArtisanMatchOrderByWithRelationInput | ArtisanMatchOrderByWithRelationInput[]
    cursor?: ArtisanMatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtisanMatchScalarFieldEnum | ArtisanMatchScalarFieldEnum[]
  }

  /**
   * CraftPlan.designConfirmation
   */
  export type CraftPlan$designConfirmationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    where?: DesignConfirmationWhereInput
  }

  /**
   * CraftPlan without action
   */
  export type CraftPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CraftPlan
     */
    select?: CraftPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CraftPlan
     */
    omit?: CraftPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CraftPlanInclude<ExtArgs> | null
  }


  /**
   * Model PreviewResult
   */

  export type AggregatePreviewResult = {
    _count: PreviewResultCountAggregateOutputType | null
    _min: PreviewResultMinAggregateOutputType | null
    _max: PreviewResultMaxAggregateOutputType | null
  }

  export type PreviewResultMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
    planId: string | null
    description: string | null
    status: string | null
  }

  export type PreviewResultMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
    planId: string | null
    description: string | null
    status: string | null
  }

  export type PreviewResultCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    submissionId: number
    planId: number
    sourceImages: number
    previewImages: number
    description: number
    status: number
    _all: number
  }


  export type PreviewResultMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    planId?: true
    description?: true
    status?: true
  }

  export type PreviewResultMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    planId?: true
    description?: true
    status?: true
  }

  export type PreviewResultCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    planId?: true
    sourceImages?: true
    previewImages?: true
    description?: true
    status?: true
    _all?: true
  }

  export type PreviewResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreviewResult to aggregate.
     */
    where?: PreviewResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreviewResults to fetch.
     */
    orderBy?: PreviewResultOrderByWithRelationInput | PreviewResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreviewResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreviewResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreviewResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreviewResults
    **/
    _count?: true | PreviewResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreviewResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreviewResultMaxAggregateInputType
  }

  export type GetPreviewResultAggregateType<T extends PreviewResultAggregateArgs> = {
        [P in keyof T & keyof AggregatePreviewResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreviewResult[P]>
      : GetScalarType<T[P], AggregatePreviewResult[P]>
  }




  export type PreviewResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreviewResultWhereInput
    orderBy?: PreviewResultOrderByWithAggregationInput | PreviewResultOrderByWithAggregationInput[]
    by: PreviewResultScalarFieldEnum[] | PreviewResultScalarFieldEnum
    having?: PreviewResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreviewResultCountAggregateInputType | true
    _min?: PreviewResultMinAggregateInputType
    _max?: PreviewResultMaxAggregateInputType
  }

  export type PreviewResultGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    submissionId: string
    planId: string
    sourceImages: JsonValue
    previewImages: JsonValue
    description: string
    status: string
    _count: PreviewResultCountAggregateOutputType | null
    _min: PreviewResultMinAggregateOutputType | null
    _max: PreviewResultMaxAggregateOutputType | null
  }

  type GetPreviewResultGroupByPayload<T extends PreviewResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreviewResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreviewResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreviewResultGroupByOutputType[P]>
            : GetScalarType<T[P], PreviewResultGroupByOutputType[P]>
        }
      >
    >


  export type PreviewResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    planId?: boolean
    sourceImages?: boolean
    previewImages?: boolean
    description?: boolean
    status?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["previewResult"]>

  export type PreviewResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    planId?: boolean
    sourceImages?: boolean
    previewImages?: boolean
    description?: boolean
    status?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["previewResult"]>

  export type PreviewResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    planId?: boolean
    sourceImages?: boolean
    previewImages?: boolean
    description?: boolean
    status?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["previewResult"]>

  export type PreviewResultSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    planId?: boolean
    sourceImages?: boolean
    previewImages?: boolean
    description?: boolean
    status?: boolean
  }

  export type PreviewResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "submissionId" | "planId" | "sourceImages" | "previewImages" | "description" | "status", ExtArgs["result"]["previewResult"]>
  export type PreviewResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }
  export type PreviewResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }
  export type PreviewResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }

  export type $PreviewResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreviewResult"
    objects: {
      plan: Prisma.$CraftPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      submissionId: string
      planId: string
      sourceImages: Prisma.JsonValue
      previewImages: Prisma.JsonValue
      description: string
      status: string
    }, ExtArgs["result"]["previewResult"]>
    composites: {}
  }

  type PreviewResultGetPayload<S extends boolean | null | undefined | PreviewResultDefaultArgs> = $Result.GetResult<Prisma.$PreviewResultPayload, S>

  type PreviewResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreviewResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreviewResultCountAggregateInputType | true
    }

  export interface PreviewResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreviewResult'], meta: { name: 'PreviewResult' } }
    /**
     * Find zero or one PreviewResult that matches the filter.
     * @param {PreviewResultFindUniqueArgs} args - Arguments to find a PreviewResult
     * @example
     * // Get one PreviewResult
     * const previewResult = await prisma.previewResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreviewResultFindUniqueArgs>(args: SelectSubset<T, PreviewResultFindUniqueArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreviewResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreviewResultFindUniqueOrThrowArgs} args - Arguments to find a PreviewResult
     * @example
     * // Get one PreviewResult
     * const previewResult = await prisma.previewResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreviewResultFindUniqueOrThrowArgs>(args: SelectSubset<T, PreviewResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreviewResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreviewResultFindFirstArgs} args - Arguments to find a PreviewResult
     * @example
     * // Get one PreviewResult
     * const previewResult = await prisma.previewResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreviewResultFindFirstArgs>(args?: SelectSubset<T, PreviewResultFindFirstArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreviewResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreviewResultFindFirstOrThrowArgs} args - Arguments to find a PreviewResult
     * @example
     * // Get one PreviewResult
     * const previewResult = await prisma.previewResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreviewResultFindFirstOrThrowArgs>(args?: SelectSubset<T, PreviewResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreviewResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreviewResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreviewResults
     * const previewResults = await prisma.previewResult.findMany()
     * 
     * // Get first 10 PreviewResults
     * const previewResults = await prisma.previewResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const previewResultWithIdOnly = await prisma.previewResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreviewResultFindManyArgs>(args?: SelectSubset<T, PreviewResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreviewResult.
     * @param {PreviewResultCreateArgs} args - Arguments to create a PreviewResult.
     * @example
     * // Create one PreviewResult
     * const PreviewResult = await prisma.previewResult.create({
     *   data: {
     *     // ... data to create a PreviewResult
     *   }
     * })
     * 
     */
    create<T extends PreviewResultCreateArgs>(args: SelectSubset<T, PreviewResultCreateArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreviewResults.
     * @param {PreviewResultCreateManyArgs} args - Arguments to create many PreviewResults.
     * @example
     * // Create many PreviewResults
     * const previewResult = await prisma.previewResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreviewResultCreateManyArgs>(args?: SelectSubset<T, PreviewResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreviewResults and returns the data saved in the database.
     * @param {PreviewResultCreateManyAndReturnArgs} args - Arguments to create many PreviewResults.
     * @example
     * // Create many PreviewResults
     * const previewResult = await prisma.previewResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreviewResults and only return the `id`
     * const previewResultWithIdOnly = await prisma.previewResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreviewResultCreateManyAndReturnArgs>(args?: SelectSubset<T, PreviewResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PreviewResult.
     * @param {PreviewResultDeleteArgs} args - Arguments to delete one PreviewResult.
     * @example
     * // Delete one PreviewResult
     * const PreviewResult = await prisma.previewResult.delete({
     *   where: {
     *     // ... filter to delete one PreviewResult
     *   }
     * })
     * 
     */
    delete<T extends PreviewResultDeleteArgs>(args: SelectSubset<T, PreviewResultDeleteArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreviewResult.
     * @param {PreviewResultUpdateArgs} args - Arguments to update one PreviewResult.
     * @example
     * // Update one PreviewResult
     * const previewResult = await prisma.previewResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreviewResultUpdateArgs>(args: SelectSubset<T, PreviewResultUpdateArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreviewResults.
     * @param {PreviewResultDeleteManyArgs} args - Arguments to filter PreviewResults to delete.
     * @example
     * // Delete a few PreviewResults
     * const { count } = await prisma.previewResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreviewResultDeleteManyArgs>(args?: SelectSubset<T, PreviewResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreviewResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreviewResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreviewResults
     * const previewResult = await prisma.previewResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreviewResultUpdateManyArgs>(args: SelectSubset<T, PreviewResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreviewResults and returns the data updated in the database.
     * @param {PreviewResultUpdateManyAndReturnArgs} args - Arguments to update many PreviewResults.
     * @example
     * // Update many PreviewResults
     * const previewResult = await prisma.previewResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PreviewResults and only return the `id`
     * const previewResultWithIdOnly = await prisma.previewResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreviewResultUpdateManyAndReturnArgs>(args: SelectSubset<T, PreviewResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PreviewResult.
     * @param {PreviewResultUpsertArgs} args - Arguments to update or create a PreviewResult.
     * @example
     * // Update or create a PreviewResult
     * const previewResult = await prisma.previewResult.upsert({
     *   create: {
     *     // ... data to create a PreviewResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreviewResult we want to update
     *   }
     * })
     */
    upsert<T extends PreviewResultUpsertArgs>(args: SelectSubset<T, PreviewResultUpsertArgs<ExtArgs>>): Prisma__PreviewResultClient<$Result.GetResult<Prisma.$PreviewResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreviewResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreviewResultCountArgs} args - Arguments to filter PreviewResults to count.
     * @example
     * // Count the number of PreviewResults
     * const count = await prisma.previewResult.count({
     *   where: {
     *     // ... the filter for the PreviewResults we want to count
     *   }
     * })
    **/
    count<T extends PreviewResultCountArgs>(
      args?: Subset<T, PreviewResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreviewResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreviewResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreviewResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreviewResultAggregateArgs>(args: Subset<T, PreviewResultAggregateArgs>): Prisma.PrismaPromise<GetPreviewResultAggregateType<T>>

    /**
     * Group by PreviewResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreviewResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreviewResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreviewResultGroupByArgs['orderBy'] }
        : { orderBy?: PreviewResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreviewResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreviewResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreviewResult model
   */
  readonly fields: PreviewResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreviewResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreviewResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends CraftPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CraftPlanDefaultArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PreviewResult model
   */
  interface PreviewResultFieldRefs {
    readonly id: FieldRef<"PreviewResult", 'String'>
    readonly createdAt: FieldRef<"PreviewResult", 'DateTime'>
    readonly updatedAt: FieldRef<"PreviewResult", 'DateTime'>
    readonly submissionId: FieldRef<"PreviewResult", 'String'>
    readonly planId: FieldRef<"PreviewResult", 'String'>
    readonly sourceImages: FieldRef<"PreviewResult", 'Json'>
    readonly previewImages: FieldRef<"PreviewResult", 'Json'>
    readonly description: FieldRef<"PreviewResult", 'String'>
    readonly status: FieldRef<"PreviewResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PreviewResult findUnique
   */
  export type PreviewResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * Filter, which PreviewResult to fetch.
     */
    where: PreviewResultWhereUniqueInput
  }

  /**
   * PreviewResult findUniqueOrThrow
   */
  export type PreviewResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * Filter, which PreviewResult to fetch.
     */
    where: PreviewResultWhereUniqueInput
  }

  /**
   * PreviewResult findFirst
   */
  export type PreviewResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * Filter, which PreviewResult to fetch.
     */
    where?: PreviewResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreviewResults to fetch.
     */
    orderBy?: PreviewResultOrderByWithRelationInput | PreviewResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreviewResults.
     */
    cursor?: PreviewResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreviewResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreviewResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreviewResults.
     */
    distinct?: PreviewResultScalarFieldEnum | PreviewResultScalarFieldEnum[]
  }

  /**
   * PreviewResult findFirstOrThrow
   */
  export type PreviewResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * Filter, which PreviewResult to fetch.
     */
    where?: PreviewResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreviewResults to fetch.
     */
    orderBy?: PreviewResultOrderByWithRelationInput | PreviewResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreviewResults.
     */
    cursor?: PreviewResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreviewResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreviewResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreviewResults.
     */
    distinct?: PreviewResultScalarFieldEnum | PreviewResultScalarFieldEnum[]
  }

  /**
   * PreviewResult findMany
   */
  export type PreviewResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * Filter, which PreviewResults to fetch.
     */
    where?: PreviewResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreviewResults to fetch.
     */
    orderBy?: PreviewResultOrderByWithRelationInput | PreviewResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreviewResults.
     */
    cursor?: PreviewResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreviewResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreviewResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreviewResults.
     */
    distinct?: PreviewResultScalarFieldEnum | PreviewResultScalarFieldEnum[]
  }

  /**
   * PreviewResult create
   */
  export type PreviewResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * The data needed to create a PreviewResult.
     */
    data: XOR<PreviewResultCreateInput, PreviewResultUncheckedCreateInput>
  }

  /**
   * PreviewResult createMany
   */
  export type PreviewResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreviewResults.
     */
    data: PreviewResultCreateManyInput | PreviewResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreviewResult createManyAndReturn
   */
  export type PreviewResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * The data used to create many PreviewResults.
     */
    data: PreviewResultCreateManyInput | PreviewResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreviewResult update
   */
  export type PreviewResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * The data needed to update a PreviewResult.
     */
    data: XOR<PreviewResultUpdateInput, PreviewResultUncheckedUpdateInput>
    /**
     * Choose, which PreviewResult to update.
     */
    where: PreviewResultWhereUniqueInput
  }

  /**
   * PreviewResult updateMany
   */
  export type PreviewResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreviewResults.
     */
    data: XOR<PreviewResultUpdateManyMutationInput, PreviewResultUncheckedUpdateManyInput>
    /**
     * Filter which PreviewResults to update
     */
    where?: PreviewResultWhereInput
    /**
     * Limit how many PreviewResults to update.
     */
    limit?: number
  }

  /**
   * PreviewResult updateManyAndReturn
   */
  export type PreviewResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * The data used to update PreviewResults.
     */
    data: XOR<PreviewResultUpdateManyMutationInput, PreviewResultUncheckedUpdateManyInput>
    /**
     * Filter which PreviewResults to update
     */
    where?: PreviewResultWhereInput
    /**
     * Limit how many PreviewResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreviewResult upsert
   */
  export type PreviewResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * The filter to search for the PreviewResult to update in case it exists.
     */
    where: PreviewResultWhereUniqueInput
    /**
     * In case the PreviewResult found by the `where` argument doesn't exist, create a new PreviewResult with this data.
     */
    create: XOR<PreviewResultCreateInput, PreviewResultUncheckedCreateInput>
    /**
     * In case the PreviewResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreviewResultUpdateInput, PreviewResultUncheckedUpdateInput>
  }

  /**
   * PreviewResult delete
   */
  export type PreviewResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
    /**
     * Filter which PreviewResult to delete.
     */
    where: PreviewResultWhereUniqueInput
  }

  /**
   * PreviewResult deleteMany
   */
  export type PreviewResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreviewResults to delete
     */
    where?: PreviewResultWhereInput
    /**
     * Limit how many PreviewResults to delete.
     */
    limit?: number
  }

  /**
   * PreviewResult without action
   */
  export type PreviewResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreviewResult
     */
    select?: PreviewResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreviewResult
     */
    omit?: PreviewResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreviewResultInclude<ExtArgs> | null
  }


  /**
   * Model ArtisanMatch
   */

  export type AggregateArtisanMatch = {
    _count: ArtisanMatchCountAggregateOutputType | null
    _avg: ArtisanMatchAvgAggregateOutputType | null
    _sum: ArtisanMatchSumAggregateOutputType | null
    _min: ArtisanMatchMinAggregateOutputType | null
    _max: ArtisanMatchMaxAggregateOutputType | null
  }

  export type ArtisanMatchAvgAggregateOutputType = {
    rank: number | null
  }

  export type ArtisanMatchSumAggregateOutputType = {
    rank: number | null
  }

  export type ArtisanMatchMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    planId: string | null
    artisanId: string | null
    name: string | null
    craftExpertise: string | null
    priceRange: string | null
    timelineRange: string | null
    matchReason: string | null
    rank: number | null
  }

  export type ArtisanMatchMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    planId: string | null
    artisanId: string | null
    name: string | null
    craftExpertise: string | null
    priceRange: string | null
    timelineRange: string | null
    matchReason: string | null
    rank: number | null
  }

  export type ArtisanMatchCountAggregateOutputType = {
    id: number
    createdAt: number
    planId: number
    artisanId: number
    name: number
    craftExpertise: number
    priceRange: number
    timelineRange: number
    matchReason: number
    rank: number
    _all: number
  }


  export type ArtisanMatchAvgAggregateInputType = {
    rank?: true
  }

  export type ArtisanMatchSumAggregateInputType = {
    rank?: true
  }

  export type ArtisanMatchMinAggregateInputType = {
    id?: true
    createdAt?: true
    planId?: true
    artisanId?: true
    name?: true
    craftExpertise?: true
    priceRange?: true
    timelineRange?: true
    matchReason?: true
    rank?: true
  }

  export type ArtisanMatchMaxAggregateInputType = {
    id?: true
    createdAt?: true
    planId?: true
    artisanId?: true
    name?: true
    craftExpertise?: true
    priceRange?: true
    timelineRange?: true
    matchReason?: true
    rank?: true
  }

  export type ArtisanMatchCountAggregateInputType = {
    id?: true
    createdAt?: true
    planId?: true
    artisanId?: true
    name?: true
    craftExpertise?: true
    priceRange?: true
    timelineRange?: true
    matchReason?: true
    rank?: true
    _all?: true
  }

  export type ArtisanMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtisanMatch to aggregate.
     */
    where?: ArtisanMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtisanMatches to fetch.
     */
    orderBy?: ArtisanMatchOrderByWithRelationInput | ArtisanMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtisanMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtisanMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtisanMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtisanMatches
    **/
    _count?: true | ArtisanMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtisanMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtisanMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtisanMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtisanMatchMaxAggregateInputType
  }

  export type GetArtisanMatchAggregateType<T extends ArtisanMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateArtisanMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtisanMatch[P]>
      : GetScalarType<T[P], AggregateArtisanMatch[P]>
  }




  export type ArtisanMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtisanMatchWhereInput
    orderBy?: ArtisanMatchOrderByWithAggregationInput | ArtisanMatchOrderByWithAggregationInput[]
    by: ArtisanMatchScalarFieldEnum[] | ArtisanMatchScalarFieldEnum
    having?: ArtisanMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtisanMatchCountAggregateInputType | true
    _avg?: ArtisanMatchAvgAggregateInputType
    _sum?: ArtisanMatchSumAggregateInputType
    _min?: ArtisanMatchMinAggregateInputType
    _max?: ArtisanMatchMaxAggregateInputType
  }

  export type ArtisanMatchGroupByOutputType = {
    id: string
    createdAt: Date
    planId: string
    artisanId: string | null
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank: number
    _count: ArtisanMatchCountAggregateOutputType | null
    _avg: ArtisanMatchAvgAggregateOutputType | null
    _sum: ArtisanMatchSumAggregateOutputType | null
    _min: ArtisanMatchMinAggregateOutputType | null
    _max: ArtisanMatchMaxAggregateOutputType | null
  }

  type GetArtisanMatchGroupByPayload<T extends ArtisanMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtisanMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtisanMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtisanMatchGroupByOutputType[P]>
            : GetScalarType<T[P], ArtisanMatchGroupByOutputType[P]>
        }
      >
    >


  export type ArtisanMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    planId?: boolean
    artisanId?: boolean
    name?: boolean
    craftExpertise?: boolean
    priceRange?: boolean
    timelineRange?: boolean
    matchReason?: boolean
    rank?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanMatch$artisanArgs<ExtArgs>
  }, ExtArgs["result"]["artisanMatch"]>

  export type ArtisanMatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    planId?: boolean
    artisanId?: boolean
    name?: boolean
    craftExpertise?: boolean
    priceRange?: boolean
    timelineRange?: boolean
    matchReason?: boolean
    rank?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanMatch$artisanArgs<ExtArgs>
  }, ExtArgs["result"]["artisanMatch"]>

  export type ArtisanMatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    planId?: boolean
    artisanId?: boolean
    name?: boolean
    craftExpertise?: boolean
    priceRange?: boolean
    timelineRange?: boolean
    matchReason?: boolean
    rank?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanMatch$artisanArgs<ExtArgs>
  }, ExtArgs["result"]["artisanMatch"]>

  export type ArtisanMatchSelectScalar = {
    id?: boolean
    createdAt?: boolean
    planId?: boolean
    artisanId?: boolean
    name?: boolean
    craftExpertise?: boolean
    priceRange?: boolean
    timelineRange?: boolean
    matchReason?: boolean
    rank?: boolean
  }

  export type ArtisanMatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "planId" | "artisanId" | "name" | "craftExpertise" | "priceRange" | "timelineRange" | "matchReason" | "rank", ExtArgs["result"]["artisanMatch"]>
  export type ArtisanMatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanMatch$artisanArgs<ExtArgs>
  }
  export type ArtisanMatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanMatch$artisanArgs<ExtArgs>
  }
  export type ArtisanMatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanMatch$artisanArgs<ExtArgs>
  }

  export type $ArtisanMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtisanMatch"
    objects: {
      plan: Prisma.$CraftPlanPayload<ExtArgs>
      artisan: Prisma.$ArtisanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      planId: string
      artisanId: string | null
      name: string
      craftExpertise: string
      priceRange: string
      timelineRange: string
      matchReason: string
      rank: number
    }, ExtArgs["result"]["artisanMatch"]>
    composites: {}
  }

  type ArtisanMatchGetPayload<S extends boolean | null | undefined | ArtisanMatchDefaultArgs> = $Result.GetResult<Prisma.$ArtisanMatchPayload, S>

  type ArtisanMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtisanMatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtisanMatchCountAggregateInputType | true
    }

  export interface ArtisanMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtisanMatch'], meta: { name: 'ArtisanMatch' } }
    /**
     * Find zero or one ArtisanMatch that matches the filter.
     * @param {ArtisanMatchFindUniqueArgs} args - Arguments to find a ArtisanMatch
     * @example
     * // Get one ArtisanMatch
     * const artisanMatch = await prisma.artisanMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtisanMatchFindUniqueArgs>(args: SelectSubset<T, ArtisanMatchFindUniqueArgs<ExtArgs>>): Prisma__ArtisanMatchClient<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArtisanMatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtisanMatchFindUniqueOrThrowArgs} args - Arguments to find a ArtisanMatch
     * @example
     * // Get one ArtisanMatch
     * const artisanMatch = await prisma.artisanMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtisanMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtisanMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtisanMatchClient<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtisanMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanMatchFindFirstArgs} args - Arguments to find a ArtisanMatch
     * @example
     * // Get one ArtisanMatch
     * const artisanMatch = await prisma.artisanMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtisanMatchFindFirstArgs>(args?: SelectSubset<T, ArtisanMatchFindFirstArgs<ExtArgs>>): Prisma__ArtisanMatchClient<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArtisanMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanMatchFindFirstOrThrowArgs} args - Arguments to find a ArtisanMatch
     * @example
     * // Get one ArtisanMatch
     * const artisanMatch = await prisma.artisanMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtisanMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtisanMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtisanMatchClient<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArtisanMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtisanMatches
     * const artisanMatches = await prisma.artisanMatch.findMany()
     * 
     * // Get first 10 ArtisanMatches
     * const artisanMatches = await prisma.artisanMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artisanMatchWithIdOnly = await prisma.artisanMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtisanMatchFindManyArgs>(args?: SelectSubset<T, ArtisanMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArtisanMatch.
     * @param {ArtisanMatchCreateArgs} args - Arguments to create a ArtisanMatch.
     * @example
     * // Create one ArtisanMatch
     * const ArtisanMatch = await prisma.artisanMatch.create({
     *   data: {
     *     // ... data to create a ArtisanMatch
     *   }
     * })
     * 
     */
    create<T extends ArtisanMatchCreateArgs>(args: SelectSubset<T, ArtisanMatchCreateArgs<ExtArgs>>): Prisma__ArtisanMatchClient<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArtisanMatches.
     * @param {ArtisanMatchCreateManyArgs} args - Arguments to create many ArtisanMatches.
     * @example
     * // Create many ArtisanMatches
     * const artisanMatch = await prisma.artisanMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtisanMatchCreateManyArgs>(args?: SelectSubset<T, ArtisanMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArtisanMatches and returns the data saved in the database.
     * @param {ArtisanMatchCreateManyAndReturnArgs} args - Arguments to create many ArtisanMatches.
     * @example
     * // Create many ArtisanMatches
     * const artisanMatch = await prisma.artisanMatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArtisanMatches and only return the `id`
     * const artisanMatchWithIdOnly = await prisma.artisanMatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtisanMatchCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtisanMatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArtisanMatch.
     * @param {ArtisanMatchDeleteArgs} args - Arguments to delete one ArtisanMatch.
     * @example
     * // Delete one ArtisanMatch
     * const ArtisanMatch = await prisma.artisanMatch.delete({
     *   where: {
     *     // ... filter to delete one ArtisanMatch
     *   }
     * })
     * 
     */
    delete<T extends ArtisanMatchDeleteArgs>(args: SelectSubset<T, ArtisanMatchDeleteArgs<ExtArgs>>): Prisma__ArtisanMatchClient<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArtisanMatch.
     * @param {ArtisanMatchUpdateArgs} args - Arguments to update one ArtisanMatch.
     * @example
     * // Update one ArtisanMatch
     * const artisanMatch = await prisma.artisanMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtisanMatchUpdateArgs>(args: SelectSubset<T, ArtisanMatchUpdateArgs<ExtArgs>>): Prisma__ArtisanMatchClient<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArtisanMatches.
     * @param {ArtisanMatchDeleteManyArgs} args - Arguments to filter ArtisanMatches to delete.
     * @example
     * // Delete a few ArtisanMatches
     * const { count } = await prisma.artisanMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtisanMatchDeleteManyArgs>(args?: SelectSubset<T, ArtisanMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtisanMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtisanMatches
     * const artisanMatch = await prisma.artisanMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtisanMatchUpdateManyArgs>(args: SelectSubset<T, ArtisanMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtisanMatches and returns the data updated in the database.
     * @param {ArtisanMatchUpdateManyAndReturnArgs} args - Arguments to update many ArtisanMatches.
     * @example
     * // Update many ArtisanMatches
     * const artisanMatch = await prisma.artisanMatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArtisanMatches and only return the `id`
     * const artisanMatchWithIdOnly = await prisma.artisanMatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtisanMatchUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtisanMatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArtisanMatch.
     * @param {ArtisanMatchUpsertArgs} args - Arguments to update or create a ArtisanMatch.
     * @example
     * // Update or create a ArtisanMatch
     * const artisanMatch = await prisma.artisanMatch.upsert({
     *   create: {
     *     // ... data to create a ArtisanMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtisanMatch we want to update
     *   }
     * })
     */
    upsert<T extends ArtisanMatchUpsertArgs>(args: SelectSubset<T, ArtisanMatchUpsertArgs<ExtArgs>>): Prisma__ArtisanMatchClient<$Result.GetResult<Prisma.$ArtisanMatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArtisanMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanMatchCountArgs} args - Arguments to filter ArtisanMatches to count.
     * @example
     * // Count the number of ArtisanMatches
     * const count = await prisma.artisanMatch.count({
     *   where: {
     *     // ... the filter for the ArtisanMatches we want to count
     *   }
     * })
    **/
    count<T extends ArtisanMatchCountArgs>(
      args?: Subset<T, ArtisanMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtisanMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtisanMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtisanMatchAggregateArgs>(args: Subset<T, ArtisanMatchAggregateArgs>): Prisma.PrismaPromise<GetArtisanMatchAggregateType<T>>

    /**
     * Group by ArtisanMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtisanMatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtisanMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtisanMatchGroupByArgs['orderBy'] }
        : { orderBy?: ArtisanMatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtisanMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtisanMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtisanMatch model
   */
  readonly fields: ArtisanMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtisanMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtisanMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends CraftPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CraftPlanDefaultArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artisan<T extends ArtisanMatch$artisanArgs<ExtArgs> = {}>(args?: Subset<T, ArtisanMatch$artisanArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArtisanMatch model
   */
  interface ArtisanMatchFieldRefs {
    readonly id: FieldRef<"ArtisanMatch", 'String'>
    readonly createdAt: FieldRef<"ArtisanMatch", 'DateTime'>
    readonly planId: FieldRef<"ArtisanMatch", 'String'>
    readonly artisanId: FieldRef<"ArtisanMatch", 'String'>
    readonly name: FieldRef<"ArtisanMatch", 'String'>
    readonly craftExpertise: FieldRef<"ArtisanMatch", 'String'>
    readonly priceRange: FieldRef<"ArtisanMatch", 'String'>
    readonly timelineRange: FieldRef<"ArtisanMatch", 'String'>
    readonly matchReason: FieldRef<"ArtisanMatch", 'String'>
    readonly rank: FieldRef<"ArtisanMatch", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ArtisanMatch findUnique
   */
  export type ArtisanMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArtisanMatch to fetch.
     */
    where: ArtisanMatchWhereUniqueInput
  }

  /**
   * ArtisanMatch findUniqueOrThrow
   */
  export type ArtisanMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArtisanMatch to fetch.
     */
    where: ArtisanMatchWhereUniqueInput
  }

  /**
   * ArtisanMatch findFirst
   */
  export type ArtisanMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArtisanMatch to fetch.
     */
    where?: ArtisanMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtisanMatches to fetch.
     */
    orderBy?: ArtisanMatchOrderByWithRelationInput | ArtisanMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtisanMatches.
     */
    cursor?: ArtisanMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtisanMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtisanMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtisanMatches.
     */
    distinct?: ArtisanMatchScalarFieldEnum | ArtisanMatchScalarFieldEnum[]
  }

  /**
   * ArtisanMatch findFirstOrThrow
   */
  export type ArtisanMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArtisanMatch to fetch.
     */
    where?: ArtisanMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtisanMatches to fetch.
     */
    orderBy?: ArtisanMatchOrderByWithRelationInput | ArtisanMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtisanMatches.
     */
    cursor?: ArtisanMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtisanMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtisanMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtisanMatches.
     */
    distinct?: ArtisanMatchScalarFieldEnum | ArtisanMatchScalarFieldEnum[]
  }

  /**
   * ArtisanMatch findMany
   */
  export type ArtisanMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * Filter, which ArtisanMatches to fetch.
     */
    where?: ArtisanMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtisanMatches to fetch.
     */
    orderBy?: ArtisanMatchOrderByWithRelationInput | ArtisanMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtisanMatches.
     */
    cursor?: ArtisanMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtisanMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtisanMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtisanMatches.
     */
    distinct?: ArtisanMatchScalarFieldEnum | ArtisanMatchScalarFieldEnum[]
  }

  /**
   * ArtisanMatch create
   */
  export type ArtisanMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtisanMatch.
     */
    data: XOR<ArtisanMatchCreateInput, ArtisanMatchUncheckedCreateInput>
  }

  /**
   * ArtisanMatch createMany
   */
  export type ArtisanMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtisanMatches.
     */
    data: ArtisanMatchCreateManyInput | ArtisanMatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArtisanMatch createManyAndReturn
   */
  export type ArtisanMatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * The data used to create many ArtisanMatches.
     */
    data: ArtisanMatchCreateManyInput | ArtisanMatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtisanMatch update
   */
  export type ArtisanMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtisanMatch.
     */
    data: XOR<ArtisanMatchUpdateInput, ArtisanMatchUncheckedUpdateInput>
    /**
     * Choose, which ArtisanMatch to update.
     */
    where: ArtisanMatchWhereUniqueInput
  }

  /**
   * ArtisanMatch updateMany
   */
  export type ArtisanMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtisanMatches.
     */
    data: XOR<ArtisanMatchUpdateManyMutationInput, ArtisanMatchUncheckedUpdateManyInput>
    /**
     * Filter which ArtisanMatches to update
     */
    where?: ArtisanMatchWhereInput
    /**
     * Limit how many ArtisanMatches to update.
     */
    limit?: number
  }

  /**
   * ArtisanMatch updateManyAndReturn
   */
  export type ArtisanMatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * The data used to update ArtisanMatches.
     */
    data: XOR<ArtisanMatchUpdateManyMutationInput, ArtisanMatchUncheckedUpdateManyInput>
    /**
     * Filter which ArtisanMatches to update
     */
    where?: ArtisanMatchWhereInput
    /**
     * Limit how many ArtisanMatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArtisanMatch upsert
   */
  export type ArtisanMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtisanMatch to update in case it exists.
     */
    where: ArtisanMatchWhereUniqueInput
    /**
     * In case the ArtisanMatch found by the `where` argument doesn't exist, create a new ArtisanMatch with this data.
     */
    create: XOR<ArtisanMatchCreateInput, ArtisanMatchUncheckedCreateInput>
    /**
     * In case the ArtisanMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtisanMatchUpdateInput, ArtisanMatchUncheckedUpdateInput>
  }

  /**
   * ArtisanMatch delete
   */
  export type ArtisanMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
    /**
     * Filter which ArtisanMatch to delete.
     */
    where: ArtisanMatchWhereUniqueInput
  }

  /**
   * ArtisanMatch deleteMany
   */
  export type ArtisanMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtisanMatches to delete
     */
    where?: ArtisanMatchWhereInput
    /**
     * Limit how many ArtisanMatches to delete.
     */
    limit?: number
  }

  /**
   * ArtisanMatch.artisan
   */
  export type ArtisanMatch$artisanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    where?: ArtisanWhereInput
  }

  /**
   * ArtisanMatch without action
   */
  export type ArtisanMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtisanMatch
     */
    select?: ArtisanMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArtisanMatch
     */
    omit?: ArtisanMatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanMatchInclude<ExtArgs> | null
  }


  /**
   * Model DesignConfirmation
   */

  export type AggregateDesignConfirmation = {
    _count: DesignConfirmationCountAggregateOutputType | null
    _min: DesignConfirmationMinAggregateOutputType | null
    _max: DesignConfirmationMaxAggregateOutputType | null
  }

  export type DesignConfirmationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
    planId: string | null
    title: string | null
    status: string | null
  }

  export type DesignConfirmationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
    planId: string | null
    title: string | null
    status: string | null
  }

  export type DesignConfirmationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    submissionId: number
    planId: number
    title: number
    sections: number
    status: number
    _all: number
  }


  export type DesignConfirmationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    planId?: true
    title?: true
    status?: true
  }

  export type DesignConfirmationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    planId?: true
    title?: true
    status?: true
  }

  export type DesignConfirmationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    planId?: true
    title?: true
    sections?: true
    status?: true
    _all?: true
  }

  export type DesignConfirmationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesignConfirmation to aggregate.
     */
    where?: DesignConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignConfirmations to fetch.
     */
    orderBy?: DesignConfirmationOrderByWithRelationInput | DesignConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DesignConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DesignConfirmations
    **/
    _count?: true | DesignConfirmationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DesignConfirmationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DesignConfirmationMaxAggregateInputType
  }

  export type GetDesignConfirmationAggregateType<T extends DesignConfirmationAggregateArgs> = {
        [P in keyof T & keyof AggregateDesignConfirmation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDesignConfirmation[P]>
      : GetScalarType<T[P], AggregateDesignConfirmation[P]>
  }




  export type DesignConfirmationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DesignConfirmationWhereInput
    orderBy?: DesignConfirmationOrderByWithAggregationInput | DesignConfirmationOrderByWithAggregationInput[]
    by: DesignConfirmationScalarFieldEnum[] | DesignConfirmationScalarFieldEnum
    having?: DesignConfirmationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DesignConfirmationCountAggregateInputType | true
    _min?: DesignConfirmationMinAggregateInputType
    _max?: DesignConfirmationMaxAggregateInputType
  }

  export type DesignConfirmationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    submissionId: string
    planId: string
    title: string
    sections: JsonValue
    status: string
    _count: DesignConfirmationCountAggregateOutputType | null
    _min: DesignConfirmationMinAggregateOutputType | null
    _max: DesignConfirmationMaxAggregateOutputType | null
  }

  type GetDesignConfirmationGroupByPayload<T extends DesignConfirmationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DesignConfirmationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DesignConfirmationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DesignConfirmationGroupByOutputType[P]>
            : GetScalarType<T[P], DesignConfirmationGroupByOutputType[P]>
        }
      >
    >


  export type DesignConfirmationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    planId?: boolean
    title?: boolean
    sections?: boolean
    status?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
    order?: boolean | DesignConfirmation$orderArgs<ExtArgs>
  }, ExtArgs["result"]["designConfirmation"]>

  export type DesignConfirmationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    planId?: boolean
    title?: boolean
    sections?: boolean
    status?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designConfirmation"]>

  export type DesignConfirmationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    planId?: boolean
    title?: boolean
    sections?: boolean
    status?: boolean
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["designConfirmation"]>

  export type DesignConfirmationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    planId?: boolean
    title?: boolean
    sections?: boolean
    status?: boolean
  }

  export type DesignConfirmationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "submissionId" | "planId" | "title" | "sections" | "status", ExtArgs["result"]["designConfirmation"]>
  export type DesignConfirmationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
    order?: boolean | DesignConfirmation$orderArgs<ExtArgs>
  }
  export type DesignConfirmationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }
  export type DesignConfirmationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | CraftPlanDefaultArgs<ExtArgs>
  }

  export type $DesignConfirmationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DesignConfirmation"
    objects: {
      plan: Prisma.$CraftPlanPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      submissionId: string
      planId: string
      title: string
      sections: Prisma.JsonValue
      status: string
    }, ExtArgs["result"]["designConfirmation"]>
    composites: {}
  }

  type DesignConfirmationGetPayload<S extends boolean | null | undefined | DesignConfirmationDefaultArgs> = $Result.GetResult<Prisma.$DesignConfirmationPayload, S>

  type DesignConfirmationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DesignConfirmationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DesignConfirmationCountAggregateInputType | true
    }

  export interface DesignConfirmationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DesignConfirmation'], meta: { name: 'DesignConfirmation' } }
    /**
     * Find zero or one DesignConfirmation that matches the filter.
     * @param {DesignConfirmationFindUniqueArgs} args - Arguments to find a DesignConfirmation
     * @example
     * // Get one DesignConfirmation
     * const designConfirmation = await prisma.designConfirmation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DesignConfirmationFindUniqueArgs>(args: SelectSubset<T, DesignConfirmationFindUniqueArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DesignConfirmation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DesignConfirmationFindUniqueOrThrowArgs} args - Arguments to find a DesignConfirmation
     * @example
     * // Get one DesignConfirmation
     * const designConfirmation = await prisma.designConfirmation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DesignConfirmationFindUniqueOrThrowArgs>(args: SelectSubset<T, DesignConfirmationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesignConfirmation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignConfirmationFindFirstArgs} args - Arguments to find a DesignConfirmation
     * @example
     * // Get one DesignConfirmation
     * const designConfirmation = await prisma.designConfirmation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DesignConfirmationFindFirstArgs>(args?: SelectSubset<T, DesignConfirmationFindFirstArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DesignConfirmation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignConfirmationFindFirstOrThrowArgs} args - Arguments to find a DesignConfirmation
     * @example
     * // Get one DesignConfirmation
     * const designConfirmation = await prisma.designConfirmation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DesignConfirmationFindFirstOrThrowArgs>(args?: SelectSubset<T, DesignConfirmationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DesignConfirmations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignConfirmationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DesignConfirmations
     * const designConfirmations = await prisma.designConfirmation.findMany()
     * 
     * // Get first 10 DesignConfirmations
     * const designConfirmations = await prisma.designConfirmation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const designConfirmationWithIdOnly = await prisma.designConfirmation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DesignConfirmationFindManyArgs>(args?: SelectSubset<T, DesignConfirmationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DesignConfirmation.
     * @param {DesignConfirmationCreateArgs} args - Arguments to create a DesignConfirmation.
     * @example
     * // Create one DesignConfirmation
     * const DesignConfirmation = await prisma.designConfirmation.create({
     *   data: {
     *     // ... data to create a DesignConfirmation
     *   }
     * })
     * 
     */
    create<T extends DesignConfirmationCreateArgs>(args: SelectSubset<T, DesignConfirmationCreateArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DesignConfirmations.
     * @param {DesignConfirmationCreateManyArgs} args - Arguments to create many DesignConfirmations.
     * @example
     * // Create many DesignConfirmations
     * const designConfirmation = await prisma.designConfirmation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DesignConfirmationCreateManyArgs>(args?: SelectSubset<T, DesignConfirmationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DesignConfirmations and returns the data saved in the database.
     * @param {DesignConfirmationCreateManyAndReturnArgs} args - Arguments to create many DesignConfirmations.
     * @example
     * // Create many DesignConfirmations
     * const designConfirmation = await prisma.designConfirmation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DesignConfirmations and only return the `id`
     * const designConfirmationWithIdOnly = await prisma.designConfirmation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DesignConfirmationCreateManyAndReturnArgs>(args?: SelectSubset<T, DesignConfirmationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DesignConfirmation.
     * @param {DesignConfirmationDeleteArgs} args - Arguments to delete one DesignConfirmation.
     * @example
     * // Delete one DesignConfirmation
     * const DesignConfirmation = await prisma.designConfirmation.delete({
     *   where: {
     *     // ... filter to delete one DesignConfirmation
     *   }
     * })
     * 
     */
    delete<T extends DesignConfirmationDeleteArgs>(args: SelectSubset<T, DesignConfirmationDeleteArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DesignConfirmation.
     * @param {DesignConfirmationUpdateArgs} args - Arguments to update one DesignConfirmation.
     * @example
     * // Update one DesignConfirmation
     * const designConfirmation = await prisma.designConfirmation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DesignConfirmationUpdateArgs>(args: SelectSubset<T, DesignConfirmationUpdateArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DesignConfirmations.
     * @param {DesignConfirmationDeleteManyArgs} args - Arguments to filter DesignConfirmations to delete.
     * @example
     * // Delete a few DesignConfirmations
     * const { count } = await prisma.designConfirmation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DesignConfirmationDeleteManyArgs>(args?: SelectSubset<T, DesignConfirmationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesignConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignConfirmationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DesignConfirmations
     * const designConfirmation = await prisma.designConfirmation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DesignConfirmationUpdateManyArgs>(args: SelectSubset<T, DesignConfirmationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DesignConfirmations and returns the data updated in the database.
     * @param {DesignConfirmationUpdateManyAndReturnArgs} args - Arguments to update many DesignConfirmations.
     * @example
     * // Update many DesignConfirmations
     * const designConfirmation = await prisma.designConfirmation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DesignConfirmations and only return the `id`
     * const designConfirmationWithIdOnly = await prisma.designConfirmation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DesignConfirmationUpdateManyAndReturnArgs>(args: SelectSubset<T, DesignConfirmationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DesignConfirmation.
     * @param {DesignConfirmationUpsertArgs} args - Arguments to update or create a DesignConfirmation.
     * @example
     * // Update or create a DesignConfirmation
     * const designConfirmation = await prisma.designConfirmation.upsert({
     *   create: {
     *     // ... data to create a DesignConfirmation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DesignConfirmation we want to update
     *   }
     * })
     */
    upsert<T extends DesignConfirmationUpsertArgs>(args: SelectSubset<T, DesignConfirmationUpsertArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DesignConfirmations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignConfirmationCountArgs} args - Arguments to filter DesignConfirmations to count.
     * @example
     * // Count the number of DesignConfirmations
     * const count = await prisma.designConfirmation.count({
     *   where: {
     *     // ... the filter for the DesignConfirmations we want to count
     *   }
     * })
    **/
    count<T extends DesignConfirmationCountArgs>(
      args?: Subset<T, DesignConfirmationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DesignConfirmationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DesignConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignConfirmationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DesignConfirmationAggregateArgs>(args: Subset<T, DesignConfirmationAggregateArgs>): Prisma.PrismaPromise<GetDesignConfirmationAggregateType<T>>

    /**
     * Group by DesignConfirmation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DesignConfirmationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DesignConfirmationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DesignConfirmationGroupByArgs['orderBy'] }
        : { orderBy?: DesignConfirmationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DesignConfirmationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDesignConfirmationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DesignConfirmation model
   */
  readonly fields: DesignConfirmationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DesignConfirmation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DesignConfirmationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends CraftPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CraftPlanDefaultArgs<ExtArgs>>): Prisma__CraftPlanClient<$Result.GetResult<Prisma.$CraftPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends DesignConfirmation$orderArgs<ExtArgs> = {}>(args?: Subset<T, DesignConfirmation$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DesignConfirmation model
   */
  interface DesignConfirmationFieldRefs {
    readonly id: FieldRef<"DesignConfirmation", 'String'>
    readonly createdAt: FieldRef<"DesignConfirmation", 'DateTime'>
    readonly updatedAt: FieldRef<"DesignConfirmation", 'DateTime'>
    readonly submissionId: FieldRef<"DesignConfirmation", 'String'>
    readonly planId: FieldRef<"DesignConfirmation", 'String'>
    readonly title: FieldRef<"DesignConfirmation", 'String'>
    readonly sections: FieldRef<"DesignConfirmation", 'Json'>
    readonly status: FieldRef<"DesignConfirmation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DesignConfirmation findUnique
   */
  export type DesignConfirmationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which DesignConfirmation to fetch.
     */
    where: DesignConfirmationWhereUniqueInput
  }

  /**
   * DesignConfirmation findUniqueOrThrow
   */
  export type DesignConfirmationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which DesignConfirmation to fetch.
     */
    where: DesignConfirmationWhereUniqueInput
  }

  /**
   * DesignConfirmation findFirst
   */
  export type DesignConfirmationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which DesignConfirmation to fetch.
     */
    where?: DesignConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignConfirmations to fetch.
     */
    orderBy?: DesignConfirmationOrderByWithRelationInput | DesignConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesignConfirmations.
     */
    cursor?: DesignConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignConfirmations.
     */
    distinct?: DesignConfirmationScalarFieldEnum | DesignConfirmationScalarFieldEnum[]
  }

  /**
   * DesignConfirmation findFirstOrThrow
   */
  export type DesignConfirmationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which DesignConfirmation to fetch.
     */
    where?: DesignConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignConfirmations to fetch.
     */
    orderBy?: DesignConfirmationOrderByWithRelationInput | DesignConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DesignConfirmations.
     */
    cursor?: DesignConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignConfirmations.
     */
    distinct?: DesignConfirmationScalarFieldEnum | DesignConfirmationScalarFieldEnum[]
  }

  /**
   * DesignConfirmation findMany
   */
  export type DesignConfirmationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * Filter, which DesignConfirmations to fetch.
     */
    where?: DesignConfirmationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DesignConfirmations to fetch.
     */
    orderBy?: DesignConfirmationOrderByWithRelationInput | DesignConfirmationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DesignConfirmations.
     */
    cursor?: DesignConfirmationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DesignConfirmations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DesignConfirmations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DesignConfirmations.
     */
    distinct?: DesignConfirmationScalarFieldEnum | DesignConfirmationScalarFieldEnum[]
  }

  /**
   * DesignConfirmation create
   */
  export type DesignConfirmationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to create a DesignConfirmation.
     */
    data: XOR<DesignConfirmationCreateInput, DesignConfirmationUncheckedCreateInput>
  }

  /**
   * DesignConfirmation createMany
   */
  export type DesignConfirmationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DesignConfirmations.
     */
    data: DesignConfirmationCreateManyInput | DesignConfirmationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DesignConfirmation createManyAndReturn
   */
  export type DesignConfirmationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * The data used to create many DesignConfirmations.
     */
    data: DesignConfirmationCreateManyInput | DesignConfirmationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesignConfirmation update
   */
  export type DesignConfirmationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * The data needed to update a DesignConfirmation.
     */
    data: XOR<DesignConfirmationUpdateInput, DesignConfirmationUncheckedUpdateInput>
    /**
     * Choose, which DesignConfirmation to update.
     */
    where: DesignConfirmationWhereUniqueInput
  }

  /**
   * DesignConfirmation updateMany
   */
  export type DesignConfirmationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DesignConfirmations.
     */
    data: XOR<DesignConfirmationUpdateManyMutationInput, DesignConfirmationUncheckedUpdateManyInput>
    /**
     * Filter which DesignConfirmations to update
     */
    where?: DesignConfirmationWhereInput
    /**
     * Limit how many DesignConfirmations to update.
     */
    limit?: number
  }

  /**
   * DesignConfirmation updateManyAndReturn
   */
  export type DesignConfirmationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * The data used to update DesignConfirmations.
     */
    data: XOR<DesignConfirmationUpdateManyMutationInput, DesignConfirmationUncheckedUpdateManyInput>
    /**
     * Filter which DesignConfirmations to update
     */
    where?: DesignConfirmationWhereInput
    /**
     * Limit how many DesignConfirmations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DesignConfirmation upsert
   */
  export type DesignConfirmationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * The filter to search for the DesignConfirmation to update in case it exists.
     */
    where: DesignConfirmationWhereUniqueInput
    /**
     * In case the DesignConfirmation found by the `where` argument doesn't exist, create a new DesignConfirmation with this data.
     */
    create: XOR<DesignConfirmationCreateInput, DesignConfirmationUncheckedCreateInput>
    /**
     * In case the DesignConfirmation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DesignConfirmationUpdateInput, DesignConfirmationUncheckedUpdateInput>
  }

  /**
   * DesignConfirmation delete
   */
  export type DesignConfirmationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
    /**
     * Filter which DesignConfirmation to delete.
     */
    where: DesignConfirmationWhereUniqueInput
  }

  /**
   * DesignConfirmation deleteMany
   */
  export type DesignConfirmationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DesignConfirmations to delete
     */
    where?: DesignConfirmationWhereInput
    /**
     * Limit how many DesignConfirmations to delete.
     */
    limit?: number
  }

  /**
   * DesignConfirmation.order
   */
  export type DesignConfirmation$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * DesignConfirmation without action
   */
  export type DesignConfirmationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DesignConfirmation
     */
    select?: DesignConfirmationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DesignConfirmation
     */
    omit?: DesignConfirmationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DesignConfirmationInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalPriceFen: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalPriceFen: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    artisanId: string | null
    submissionId: string | null
    designConfirmationId: string | null
    status: string | null
    totalPriceFen: number | null
    agreedDeliveryDate: string | null
    notes: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    artisanId: string | null
    submissionId: string | null
    designConfirmationId: string | null
    status: string | null
    totalPriceFen: number | null
    agreedDeliveryDate: string | null
    notes: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    artisanId: number
    submissionId: number
    designConfirmationId: number
    status: number
    totalPriceFen: number
    agreedDeliveryDate: number
    notes: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalPriceFen?: true
  }

  export type OrderSumAggregateInputType = {
    totalPriceFen?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    artisanId?: true
    submissionId?: true
    designConfirmationId?: true
    status?: true
    totalPriceFen?: true
    agreedDeliveryDate?: true
    notes?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    artisanId?: true
    submissionId?: true
    designConfirmationId?: true
    status?: true
    totalPriceFen?: true
    agreedDeliveryDate?: true
    notes?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    artisanId?: true
    submissionId?: true
    designConfirmationId?: true
    status?: true
    totalPriceFen?: true
    agreedDeliveryDate?: true
    notes?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    artisanId: string
    submissionId: string
    designConfirmationId: string
    status: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes: string | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    artisanId?: boolean
    submissionId?: boolean
    designConfirmationId?: boolean
    status?: boolean
    totalPriceFen?: boolean
    agreedDeliveryDate?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    designConfirmation?: boolean | DesignConfirmationDefaultArgs<ExtArgs>
    messages?: boolean | Order$messagesArgs<ExtArgs>
    stages?: boolean | Order$stagesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    artisanId?: boolean
    submissionId?: boolean
    designConfirmationId?: boolean
    status?: boolean
    totalPriceFen?: boolean
    agreedDeliveryDate?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    designConfirmation?: boolean | DesignConfirmationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    artisanId?: boolean
    submissionId?: boolean
    designConfirmationId?: boolean
    status?: boolean
    totalPriceFen?: boolean
    agreedDeliveryDate?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    designConfirmation?: boolean | DesignConfirmationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    artisanId?: boolean
    submissionId?: boolean
    designConfirmationId?: boolean
    status?: boolean
    totalPriceFen?: boolean
    agreedDeliveryDate?: boolean
    notes?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "artisanId" | "submissionId" | "designConfirmationId" | "status" | "totalPriceFen" | "agreedDeliveryDate" | "notes", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    designConfirmation?: boolean | DesignConfirmationDefaultArgs<ExtArgs>
    messages?: boolean | Order$messagesArgs<ExtArgs>
    stages?: boolean | Order$stagesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    designConfirmation?: boolean | DesignConfirmationDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artisan?: boolean | ArtisanDefaultArgs<ExtArgs>
    designConfirmation?: boolean | DesignConfirmationDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      artisan: Prisma.$ArtisanPayload<ExtArgs>
      designConfirmation: Prisma.$DesignConfirmationPayload<ExtArgs>
      messages: Prisma.$OrderMessagePayload<ExtArgs>[]
      stages: Prisma.$OrderStagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      artisanId: string
      submissionId: string
      designConfirmationId: string
      status: string
      totalPriceFen: number
      agreedDeliveryDate: string
      notes: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    artisan<T extends ArtisanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtisanDefaultArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    designConfirmation<T extends DesignConfirmationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DesignConfirmationDefaultArgs<ExtArgs>>): Prisma__DesignConfirmationClient<$Result.GetResult<Prisma.$DesignConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Order$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Order$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stages<T extends Order$stagesArgs<ExtArgs> = {}>(args?: Subset<T, Order$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly artisanId: FieldRef<"Order", 'String'>
    readonly submissionId: FieldRef<"Order", 'String'>
    readonly designConfirmationId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly totalPriceFen: FieldRef<"Order", 'Int'>
    readonly agreedDeliveryDate: FieldRef<"Order", 'String'>
    readonly notes: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.messages
   */
  export type Order$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    where?: OrderMessageWhereInput
    orderBy?: OrderMessageOrderByWithRelationInput | OrderMessageOrderByWithRelationInput[]
    cursor?: OrderMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderMessageScalarFieldEnum | OrderMessageScalarFieldEnum[]
  }

  /**
   * Order.stages
   */
  export type Order$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    where?: OrderStageWhereInput
    orderBy?: OrderStageOrderByWithRelationInput | OrderStageOrderByWithRelationInput[]
    cursor?: OrderStageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderStageScalarFieldEnum | OrderStageScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderMessage
   */

  export type AggregateOrderMessage = {
    _count: OrderMessageCountAggregateOutputType | null
    _min: OrderMessageMinAggregateOutputType | null
    _max: OrderMessageMaxAggregateOutputType | null
  }

  export type OrderMessageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    orderId: string | null
    senderType: string | null
    userId: string | null
    artisanId: string | null
    content: string | null
  }

  export type OrderMessageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    orderId: string | null
    senderType: string | null
    userId: string | null
    artisanId: string | null
    content: string | null
  }

  export type OrderMessageCountAggregateOutputType = {
    id: number
    createdAt: number
    orderId: number
    senderType: number
    userId: number
    artisanId: number
    content: number
    attachments: number
    _all: number
  }


  export type OrderMessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    orderId?: true
    senderType?: true
    userId?: true
    artisanId?: true
    content?: true
  }

  export type OrderMessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    orderId?: true
    senderType?: true
    userId?: true
    artisanId?: true
    content?: true
  }

  export type OrderMessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    orderId?: true
    senderType?: true
    userId?: true
    artisanId?: true
    content?: true
    attachments?: true
    _all?: true
  }

  export type OrderMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderMessage to aggregate.
     */
    where?: OrderMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderMessages to fetch.
     */
    orderBy?: OrderMessageOrderByWithRelationInput | OrderMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderMessages
    **/
    _count?: true | OrderMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMessageMaxAggregateInputType
  }

  export type GetOrderMessageAggregateType<T extends OrderMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderMessage[P]>
      : GetScalarType<T[P], AggregateOrderMessage[P]>
  }




  export type OrderMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderMessageWhereInput
    orderBy?: OrderMessageOrderByWithAggregationInput | OrderMessageOrderByWithAggregationInput[]
    by: OrderMessageScalarFieldEnum[] | OrderMessageScalarFieldEnum
    having?: OrderMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderMessageCountAggregateInputType | true
    _min?: OrderMessageMinAggregateInputType
    _max?: OrderMessageMaxAggregateInputType
  }

  export type OrderMessageGroupByOutputType = {
    id: string
    createdAt: Date
    orderId: string
    senderType: string
    userId: string | null
    artisanId: string | null
    content: string
    attachments: JsonValue
    _count: OrderMessageCountAggregateOutputType | null
    _min: OrderMessageMinAggregateOutputType | null
    _max: OrderMessageMaxAggregateOutputType | null
  }

  type GetOrderMessageGroupByPayload<T extends OrderMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderMessageGroupByOutputType[P]>
            : GetScalarType<T[P], OrderMessageGroupByOutputType[P]>
        }
      >
    >


  export type OrderMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    orderId?: boolean
    senderType?: boolean
    userId?: boolean
    artisanId?: boolean
    content?: boolean
    attachments?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | OrderMessage$userArgs<ExtArgs>
    artisan?: boolean | OrderMessage$artisanArgs<ExtArgs>
  }, ExtArgs["result"]["orderMessage"]>

  export type OrderMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    orderId?: boolean
    senderType?: boolean
    userId?: boolean
    artisanId?: boolean
    content?: boolean
    attachments?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | OrderMessage$userArgs<ExtArgs>
    artisan?: boolean | OrderMessage$artisanArgs<ExtArgs>
  }, ExtArgs["result"]["orderMessage"]>

  export type OrderMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    orderId?: boolean
    senderType?: boolean
    userId?: boolean
    artisanId?: boolean
    content?: boolean
    attachments?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | OrderMessage$userArgs<ExtArgs>
    artisan?: boolean | OrderMessage$artisanArgs<ExtArgs>
  }, ExtArgs["result"]["orderMessage"]>

  export type OrderMessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    orderId?: boolean
    senderType?: boolean
    userId?: boolean
    artisanId?: boolean
    content?: boolean
    attachments?: boolean
  }

  export type OrderMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "orderId" | "senderType" | "userId" | "artisanId" | "content" | "attachments", ExtArgs["result"]["orderMessage"]>
  export type OrderMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | OrderMessage$userArgs<ExtArgs>
    artisan?: boolean | OrderMessage$artisanArgs<ExtArgs>
  }
  export type OrderMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | OrderMessage$userArgs<ExtArgs>
    artisan?: boolean | OrderMessage$artisanArgs<ExtArgs>
  }
  export type OrderMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | OrderMessage$userArgs<ExtArgs>
    artisan?: boolean | OrderMessage$artisanArgs<ExtArgs>
  }

  export type $OrderMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderMessage"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      artisan: Prisma.$ArtisanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      orderId: string
      senderType: string
      userId: string | null
      artisanId: string | null
      content: string
      attachments: Prisma.JsonValue
    }, ExtArgs["result"]["orderMessage"]>
    composites: {}
  }

  type OrderMessageGetPayload<S extends boolean | null | undefined | OrderMessageDefaultArgs> = $Result.GetResult<Prisma.$OrderMessagePayload, S>

  type OrderMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderMessageCountAggregateInputType | true
    }

  export interface OrderMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderMessage'], meta: { name: 'OrderMessage' } }
    /**
     * Find zero or one OrderMessage that matches the filter.
     * @param {OrderMessageFindUniqueArgs} args - Arguments to find a OrderMessage
     * @example
     * // Get one OrderMessage
     * const orderMessage = await prisma.orderMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderMessageFindUniqueArgs>(args: SelectSubset<T, OrderMessageFindUniqueArgs<ExtArgs>>): Prisma__OrderMessageClient<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderMessageFindUniqueOrThrowArgs} args - Arguments to find a OrderMessage
     * @example
     * // Get one OrderMessage
     * const orderMessage = await prisma.orderMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderMessageClient<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderMessageFindFirstArgs} args - Arguments to find a OrderMessage
     * @example
     * // Get one OrderMessage
     * const orderMessage = await prisma.orderMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderMessageFindFirstArgs>(args?: SelectSubset<T, OrderMessageFindFirstArgs<ExtArgs>>): Prisma__OrderMessageClient<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderMessageFindFirstOrThrowArgs} args - Arguments to find a OrderMessage
     * @example
     * // Get one OrderMessage
     * const orderMessage = await prisma.orderMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderMessageClient<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderMessages
     * const orderMessages = await prisma.orderMessage.findMany()
     * 
     * // Get first 10 OrderMessages
     * const orderMessages = await prisma.orderMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderMessageWithIdOnly = await prisma.orderMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderMessageFindManyArgs>(args?: SelectSubset<T, OrderMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderMessage.
     * @param {OrderMessageCreateArgs} args - Arguments to create a OrderMessage.
     * @example
     * // Create one OrderMessage
     * const OrderMessage = await prisma.orderMessage.create({
     *   data: {
     *     // ... data to create a OrderMessage
     *   }
     * })
     * 
     */
    create<T extends OrderMessageCreateArgs>(args: SelectSubset<T, OrderMessageCreateArgs<ExtArgs>>): Prisma__OrderMessageClient<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderMessages.
     * @param {OrderMessageCreateManyArgs} args - Arguments to create many OrderMessages.
     * @example
     * // Create many OrderMessages
     * const orderMessage = await prisma.orderMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderMessageCreateManyArgs>(args?: SelectSubset<T, OrderMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderMessages and returns the data saved in the database.
     * @param {OrderMessageCreateManyAndReturnArgs} args - Arguments to create many OrderMessages.
     * @example
     * // Create many OrderMessages
     * const orderMessage = await prisma.orderMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderMessages and only return the `id`
     * const orderMessageWithIdOnly = await prisma.orderMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderMessage.
     * @param {OrderMessageDeleteArgs} args - Arguments to delete one OrderMessage.
     * @example
     * // Delete one OrderMessage
     * const OrderMessage = await prisma.orderMessage.delete({
     *   where: {
     *     // ... filter to delete one OrderMessage
     *   }
     * })
     * 
     */
    delete<T extends OrderMessageDeleteArgs>(args: SelectSubset<T, OrderMessageDeleteArgs<ExtArgs>>): Prisma__OrderMessageClient<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderMessage.
     * @param {OrderMessageUpdateArgs} args - Arguments to update one OrderMessage.
     * @example
     * // Update one OrderMessage
     * const orderMessage = await prisma.orderMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderMessageUpdateArgs>(args: SelectSubset<T, OrderMessageUpdateArgs<ExtArgs>>): Prisma__OrderMessageClient<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderMessages.
     * @param {OrderMessageDeleteManyArgs} args - Arguments to filter OrderMessages to delete.
     * @example
     * // Delete a few OrderMessages
     * const { count } = await prisma.orderMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderMessageDeleteManyArgs>(args?: SelectSubset<T, OrderMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderMessages
     * const orderMessage = await prisma.orderMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderMessageUpdateManyArgs>(args: SelectSubset<T, OrderMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderMessages and returns the data updated in the database.
     * @param {OrderMessageUpdateManyAndReturnArgs} args - Arguments to update many OrderMessages.
     * @example
     * // Update many OrderMessages
     * const orderMessage = await prisma.orderMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderMessages and only return the `id`
     * const orderMessageWithIdOnly = await prisma.orderMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderMessage.
     * @param {OrderMessageUpsertArgs} args - Arguments to update or create a OrderMessage.
     * @example
     * // Update or create a OrderMessage
     * const orderMessage = await prisma.orderMessage.upsert({
     *   create: {
     *     // ... data to create a OrderMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderMessage we want to update
     *   }
     * })
     */
    upsert<T extends OrderMessageUpsertArgs>(args: SelectSubset<T, OrderMessageUpsertArgs<ExtArgs>>): Prisma__OrderMessageClient<$Result.GetResult<Prisma.$OrderMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderMessageCountArgs} args - Arguments to filter OrderMessages to count.
     * @example
     * // Count the number of OrderMessages
     * const count = await prisma.orderMessage.count({
     *   where: {
     *     // ... the filter for the OrderMessages we want to count
     *   }
     * })
    **/
    count<T extends OrderMessageCountArgs>(
      args?: Subset<T, OrderMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderMessageAggregateArgs>(args: Subset<T, OrderMessageAggregateArgs>): Prisma.PrismaPromise<GetOrderMessageAggregateType<T>>

    /**
     * Group by OrderMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderMessageGroupByArgs['orderBy'] }
        : { orderBy?: OrderMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderMessage model
   */
  readonly fields: OrderMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends OrderMessage$userArgs<ExtArgs> = {}>(args?: Subset<T, OrderMessage$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    artisan<T extends OrderMessage$artisanArgs<ExtArgs> = {}>(args?: Subset<T, OrderMessage$artisanArgs<ExtArgs>>): Prisma__ArtisanClient<$Result.GetResult<Prisma.$ArtisanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderMessage model
   */
  interface OrderMessageFieldRefs {
    readonly id: FieldRef<"OrderMessage", 'String'>
    readonly createdAt: FieldRef<"OrderMessage", 'DateTime'>
    readonly orderId: FieldRef<"OrderMessage", 'String'>
    readonly senderType: FieldRef<"OrderMessage", 'String'>
    readonly userId: FieldRef<"OrderMessage", 'String'>
    readonly artisanId: FieldRef<"OrderMessage", 'String'>
    readonly content: FieldRef<"OrderMessage", 'String'>
    readonly attachments: FieldRef<"OrderMessage", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * OrderMessage findUnique
   */
  export type OrderMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * Filter, which OrderMessage to fetch.
     */
    where: OrderMessageWhereUniqueInput
  }

  /**
   * OrderMessage findUniqueOrThrow
   */
  export type OrderMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * Filter, which OrderMessage to fetch.
     */
    where: OrderMessageWhereUniqueInput
  }

  /**
   * OrderMessage findFirst
   */
  export type OrderMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * Filter, which OrderMessage to fetch.
     */
    where?: OrderMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderMessages to fetch.
     */
    orderBy?: OrderMessageOrderByWithRelationInput | OrderMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderMessages.
     */
    cursor?: OrderMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderMessages.
     */
    distinct?: OrderMessageScalarFieldEnum | OrderMessageScalarFieldEnum[]
  }

  /**
   * OrderMessage findFirstOrThrow
   */
  export type OrderMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * Filter, which OrderMessage to fetch.
     */
    where?: OrderMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderMessages to fetch.
     */
    orderBy?: OrderMessageOrderByWithRelationInput | OrderMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderMessages.
     */
    cursor?: OrderMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderMessages.
     */
    distinct?: OrderMessageScalarFieldEnum | OrderMessageScalarFieldEnum[]
  }

  /**
   * OrderMessage findMany
   */
  export type OrderMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * Filter, which OrderMessages to fetch.
     */
    where?: OrderMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderMessages to fetch.
     */
    orderBy?: OrderMessageOrderByWithRelationInput | OrderMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderMessages.
     */
    cursor?: OrderMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderMessages.
     */
    distinct?: OrderMessageScalarFieldEnum | OrderMessageScalarFieldEnum[]
  }

  /**
   * OrderMessage create
   */
  export type OrderMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderMessage.
     */
    data: XOR<OrderMessageCreateInput, OrderMessageUncheckedCreateInput>
  }

  /**
   * OrderMessage createMany
   */
  export type OrderMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderMessages.
     */
    data: OrderMessageCreateManyInput | OrderMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderMessage createManyAndReturn
   */
  export type OrderMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * The data used to create many OrderMessages.
     */
    data: OrderMessageCreateManyInput | OrderMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderMessage update
   */
  export type OrderMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderMessage.
     */
    data: XOR<OrderMessageUpdateInput, OrderMessageUncheckedUpdateInput>
    /**
     * Choose, which OrderMessage to update.
     */
    where: OrderMessageWhereUniqueInput
  }

  /**
   * OrderMessage updateMany
   */
  export type OrderMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderMessages.
     */
    data: XOR<OrderMessageUpdateManyMutationInput, OrderMessageUncheckedUpdateManyInput>
    /**
     * Filter which OrderMessages to update
     */
    where?: OrderMessageWhereInput
    /**
     * Limit how many OrderMessages to update.
     */
    limit?: number
  }

  /**
   * OrderMessage updateManyAndReturn
   */
  export type OrderMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * The data used to update OrderMessages.
     */
    data: XOR<OrderMessageUpdateManyMutationInput, OrderMessageUncheckedUpdateManyInput>
    /**
     * Filter which OrderMessages to update
     */
    where?: OrderMessageWhereInput
    /**
     * Limit how many OrderMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderMessage upsert
   */
  export type OrderMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderMessage to update in case it exists.
     */
    where: OrderMessageWhereUniqueInput
    /**
     * In case the OrderMessage found by the `where` argument doesn't exist, create a new OrderMessage with this data.
     */
    create: XOR<OrderMessageCreateInput, OrderMessageUncheckedCreateInput>
    /**
     * In case the OrderMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderMessageUpdateInput, OrderMessageUncheckedUpdateInput>
  }

  /**
   * OrderMessage delete
   */
  export type OrderMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
    /**
     * Filter which OrderMessage to delete.
     */
    where: OrderMessageWhereUniqueInput
  }

  /**
   * OrderMessage deleteMany
   */
  export type OrderMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderMessages to delete
     */
    where?: OrderMessageWhereInput
    /**
     * Limit how many OrderMessages to delete.
     */
    limit?: number
  }

  /**
   * OrderMessage.user
   */
  export type OrderMessage$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OrderMessage.artisan
   */
  export type OrderMessage$artisanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artisan
     */
    select?: ArtisanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artisan
     */
    omit?: ArtisanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtisanInclude<ExtArgs> | null
    where?: ArtisanWhereInput
  }

  /**
   * OrderMessage without action
   */
  export type OrderMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderMessage
     */
    select?: OrderMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderMessage
     */
    omit?: OrderMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderMessageInclude<ExtArgs> | null
  }


  /**
   * Model OrderStage
   */

  export type AggregateOrderStage = {
    _count: OrderStageCountAggregateOutputType | null
    _avg: OrderStageAvgAggregateOutputType | null
    _sum: OrderStageSumAggregateOutputType | null
    _min: OrderStageMinAggregateOutputType | null
    _max: OrderStageMaxAggregateOutputType | null
  }

  export type OrderStageAvgAggregateOutputType = {
    sequence: number | null
  }

  export type OrderStageSumAggregateOutputType = {
    sequence: number | null
  }

  export type OrderStageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
    sequence: number | null
    title: string | null
    detail: string | null
    status: string | null
    doneAt: Date | null
  }

  export type OrderStageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
    sequence: number | null
    title: string | null
    detail: string | null
    status: string | null
    doneAt: Date | null
  }

  export type OrderStageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    orderId: number
    sequence: number
    title: number
    detail: number
    status: number
    doneAt: number
    _all: number
  }


  export type OrderStageAvgAggregateInputType = {
    sequence?: true
  }

  export type OrderStageSumAggregateInputType = {
    sequence?: true
  }

  export type OrderStageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    sequence?: true
    title?: true
    detail?: true
    status?: true
    doneAt?: true
  }

  export type OrderStageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    sequence?: true
    title?: true
    detail?: true
    status?: true
    doneAt?: true
  }

  export type OrderStageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    sequence?: true
    title?: true
    detail?: true
    status?: true
    doneAt?: true
    _all?: true
  }

  export type OrderStageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStage to aggregate.
     */
    where?: OrderStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStages to fetch.
     */
    orderBy?: OrderStageOrderByWithRelationInput | OrderStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderStages
    **/
    _count?: true | OrderStageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderStageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderStageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderStageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderStageMaxAggregateInputType
  }

  export type GetOrderStageAggregateType<T extends OrderStageAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderStage[P]>
      : GetScalarType<T[P], AggregateOrderStage[P]>
  }




  export type OrderStageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderStageWhereInput
    orderBy?: OrderStageOrderByWithAggregationInput | OrderStageOrderByWithAggregationInput[]
    by: OrderStageScalarFieldEnum[] | OrderStageScalarFieldEnum
    having?: OrderStageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderStageCountAggregateInputType | true
    _avg?: OrderStageAvgAggregateInputType
    _sum?: OrderStageSumAggregateInputType
    _min?: OrderStageMinAggregateInputType
    _max?: OrderStageMaxAggregateInputType
  }

  export type OrderStageGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    orderId: string
    sequence: number
    title: string
    detail: string
    status: string
    doneAt: Date | null
    _count: OrderStageCountAggregateOutputType | null
    _avg: OrderStageAvgAggregateOutputType | null
    _sum: OrderStageSumAggregateOutputType | null
    _min: OrderStageMinAggregateOutputType | null
    _max: OrderStageMaxAggregateOutputType | null
  }

  type GetOrderStageGroupByPayload<T extends OrderStageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderStageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderStageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderStageGroupByOutputType[P]>
            : GetScalarType<T[P], OrderStageGroupByOutputType[P]>
        }
      >
    >


  export type OrderStageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    sequence?: boolean
    title?: boolean
    detail?: boolean
    status?: boolean
    doneAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderStage"]>

  export type OrderStageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    sequence?: boolean
    title?: boolean
    detail?: boolean
    status?: boolean
    doneAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderStage"]>

  export type OrderStageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    sequence?: boolean
    title?: boolean
    detail?: boolean
    status?: boolean
    doneAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderStage"]>

  export type OrderStageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    sequence?: boolean
    title?: boolean
    detail?: boolean
    status?: boolean
    doneAt?: boolean
  }

  export type OrderStageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "orderId" | "sequence" | "title" | "detail" | "status" | "doneAt", ExtArgs["result"]["orderStage"]>
  export type OrderStageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderStageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderStageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderStagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderStage"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      orderId: string
      sequence: number
      title: string
      detail: string
      status: string
      doneAt: Date | null
    }, ExtArgs["result"]["orderStage"]>
    composites: {}
  }

  type OrderStageGetPayload<S extends boolean | null | undefined | OrderStageDefaultArgs> = $Result.GetResult<Prisma.$OrderStagePayload, S>

  type OrderStageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderStageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderStageCountAggregateInputType | true
    }

  export interface OrderStageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderStage'], meta: { name: 'OrderStage' } }
    /**
     * Find zero or one OrderStage that matches the filter.
     * @param {OrderStageFindUniqueArgs} args - Arguments to find a OrderStage
     * @example
     * // Get one OrderStage
     * const orderStage = await prisma.orderStage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderStageFindUniqueArgs>(args: SelectSubset<T, OrderStageFindUniqueArgs<ExtArgs>>): Prisma__OrderStageClient<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderStage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderStageFindUniqueOrThrowArgs} args - Arguments to find a OrderStage
     * @example
     * // Get one OrderStage
     * const orderStage = await prisma.orderStage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderStageFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderStageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderStageClient<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStageFindFirstArgs} args - Arguments to find a OrderStage
     * @example
     * // Get one OrderStage
     * const orderStage = await prisma.orderStage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderStageFindFirstArgs>(args?: SelectSubset<T, OrderStageFindFirstArgs<ExtArgs>>): Prisma__OrderStageClient<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderStage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStageFindFirstOrThrowArgs} args - Arguments to find a OrderStage
     * @example
     * // Get one OrderStage
     * const orderStage = await prisma.orderStage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderStageFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderStageFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderStageClient<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderStages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderStages
     * const orderStages = await prisma.orderStage.findMany()
     * 
     * // Get first 10 OrderStages
     * const orderStages = await prisma.orderStage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderStageWithIdOnly = await prisma.orderStage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderStageFindManyArgs>(args?: SelectSubset<T, OrderStageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderStage.
     * @param {OrderStageCreateArgs} args - Arguments to create a OrderStage.
     * @example
     * // Create one OrderStage
     * const OrderStage = await prisma.orderStage.create({
     *   data: {
     *     // ... data to create a OrderStage
     *   }
     * })
     * 
     */
    create<T extends OrderStageCreateArgs>(args: SelectSubset<T, OrderStageCreateArgs<ExtArgs>>): Prisma__OrderStageClient<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderStages.
     * @param {OrderStageCreateManyArgs} args - Arguments to create many OrderStages.
     * @example
     * // Create many OrderStages
     * const orderStage = await prisma.orderStage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderStageCreateManyArgs>(args?: SelectSubset<T, OrderStageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderStages and returns the data saved in the database.
     * @param {OrderStageCreateManyAndReturnArgs} args - Arguments to create many OrderStages.
     * @example
     * // Create many OrderStages
     * const orderStage = await prisma.orderStage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderStages and only return the `id`
     * const orderStageWithIdOnly = await prisma.orderStage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderStageCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderStageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderStage.
     * @param {OrderStageDeleteArgs} args - Arguments to delete one OrderStage.
     * @example
     * // Delete one OrderStage
     * const OrderStage = await prisma.orderStage.delete({
     *   where: {
     *     // ... filter to delete one OrderStage
     *   }
     * })
     * 
     */
    delete<T extends OrderStageDeleteArgs>(args: SelectSubset<T, OrderStageDeleteArgs<ExtArgs>>): Prisma__OrderStageClient<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderStage.
     * @param {OrderStageUpdateArgs} args - Arguments to update one OrderStage.
     * @example
     * // Update one OrderStage
     * const orderStage = await prisma.orderStage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderStageUpdateArgs>(args: SelectSubset<T, OrderStageUpdateArgs<ExtArgs>>): Prisma__OrderStageClient<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderStages.
     * @param {OrderStageDeleteManyArgs} args - Arguments to filter OrderStages to delete.
     * @example
     * // Delete a few OrderStages
     * const { count } = await prisma.orderStage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderStageDeleteManyArgs>(args?: SelectSubset<T, OrderStageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderStages
     * const orderStage = await prisma.orderStage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderStageUpdateManyArgs>(args: SelectSubset<T, OrderStageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderStages and returns the data updated in the database.
     * @param {OrderStageUpdateManyAndReturnArgs} args - Arguments to update many OrderStages.
     * @example
     * // Update many OrderStages
     * const orderStage = await prisma.orderStage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderStages and only return the `id`
     * const orderStageWithIdOnly = await prisma.orderStage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderStageUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderStageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderStage.
     * @param {OrderStageUpsertArgs} args - Arguments to update or create a OrderStage.
     * @example
     * // Update or create a OrderStage
     * const orderStage = await prisma.orderStage.upsert({
     *   create: {
     *     // ... data to create a OrderStage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderStage we want to update
     *   }
     * })
     */
    upsert<T extends OrderStageUpsertArgs>(args: SelectSubset<T, OrderStageUpsertArgs<ExtArgs>>): Prisma__OrderStageClient<$Result.GetResult<Prisma.$OrderStagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderStages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStageCountArgs} args - Arguments to filter OrderStages to count.
     * @example
     * // Count the number of OrderStages
     * const count = await prisma.orderStage.count({
     *   where: {
     *     // ... the filter for the OrderStages we want to count
     *   }
     * })
    **/
    count<T extends OrderStageCountArgs>(
      args?: Subset<T, OrderStageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderStageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderStageAggregateArgs>(args: Subset<T, OrderStageAggregateArgs>): Prisma.PrismaPromise<GetOrderStageAggregateType<T>>

    /**
     * Group by OrderStage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderStageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderStageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderStageGroupByArgs['orderBy'] }
        : { orderBy?: OrderStageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderStageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderStage model
   */
  readonly fields: OrderStageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderStage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderStageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderStage model
   */
  interface OrderStageFieldRefs {
    readonly id: FieldRef<"OrderStage", 'String'>
    readonly createdAt: FieldRef<"OrderStage", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderStage", 'DateTime'>
    readonly orderId: FieldRef<"OrderStage", 'String'>
    readonly sequence: FieldRef<"OrderStage", 'Int'>
    readonly title: FieldRef<"OrderStage", 'String'>
    readonly detail: FieldRef<"OrderStage", 'String'>
    readonly status: FieldRef<"OrderStage", 'String'>
    readonly doneAt: FieldRef<"OrderStage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderStage findUnique
   */
  export type OrderStageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * Filter, which OrderStage to fetch.
     */
    where: OrderStageWhereUniqueInput
  }

  /**
   * OrderStage findUniqueOrThrow
   */
  export type OrderStageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * Filter, which OrderStage to fetch.
     */
    where: OrderStageWhereUniqueInput
  }

  /**
   * OrderStage findFirst
   */
  export type OrderStageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * Filter, which OrderStage to fetch.
     */
    where?: OrderStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStages to fetch.
     */
    orderBy?: OrderStageOrderByWithRelationInput | OrderStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStages.
     */
    cursor?: OrderStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStages.
     */
    distinct?: OrderStageScalarFieldEnum | OrderStageScalarFieldEnum[]
  }

  /**
   * OrderStage findFirstOrThrow
   */
  export type OrderStageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * Filter, which OrderStage to fetch.
     */
    where?: OrderStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStages to fetch.
     */
    orderBy?: OrderStageOrderByWithRelationInput | OrderStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderStages.
     */
    cursor?: OrderStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStages.
     */
    distinct?: OrderStageScalarFieldEnum | OrderStageScalarFieldEnum[]
  }

  /**
   * OrderStage findMany
   */
  export type OrderStageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * Filter, which OrderStages to fetch.
     */
    where?: OrderStageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderStages to fetch.
     */
    orderBy?: OrderStageOrderByWithRelationInput | OrderStageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderStages.
     */
    cursor?: OrderStageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderStages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderStages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderStages.
     */
    distinct?: OrderStageScalarFieldEnum | OrderStageScalarFieldEnum[]
  }

  /**
   * OrderStage create
   */
  export type OrderStageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderStage.
     */
    data: XOR<OrderStageCreateInput, OrderStageUncheckedCreateInput>
  }

  /**
   * OrderStage createMany
   */
  export type OrderStageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderStages.
     */
    data: OrderStageCreateManyInput | OrderStageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderStage createManyAndReturn
   */
  export type OrderStageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * The data used to create many OrderStages.
     */
    data: OrderStageCreateManyInput | OrderStageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderStage update
   */
  export type OrderStageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderStage.
     */
    data: XOR<OrderStageUpdateInput, OrderStageUncheckedUpdateInput>
    /**
     * Choose, which OrderStage to update.
     */
    where: OrderStageWhereUniqueInput
  }

  /**
   * OrderStage updateMany
   */
  export type OrderStageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderStages.
     */
    data: XOR<OrderStageUpdateManyMutationInput, OrderStageUncheckedUpdateManyInput>
    /**
     * Filter which OrderStages to update
     */
    where?: OrderStageWhereInput
    /**
     * Limit how many OrderStages to update.
     */
    limit?: number
  }

  /**
   * OrderStage updateManyAndReturn
   */
  export type OrderStageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * The data used to update OrderStages.
     */
    data: XOR<OrderStageUpdateManyMutationInput, OrderStageUncheckedUpdateManyInput>
    /**
     * Filter which OrderStages to update
     */
    where?: OrderStageWhereInput
    /**
     * Limit how many OrderStages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderStage upsert
   */
  export type OrderStageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderStage to update in case it exists.
     */
    where: OrderStageWhereUniqueInput
    /**
     * In case the OrderStage found by the `where` argument doesn't exist, create a new OrderStage with this data.
     */
    create: XOR<OrderStageCreateInput, OrderStageUncheckedCreateInput>
    /**
     * In case the OrderStage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderStageUpdateInput, OrderStageUncheckedUpdateInput>
  }

  /**
   * OrderStage delete
   */
  export type OrderStageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
    /**
     * Filter which OrderStage to delete.
     */
    where: OrderStageWhereUniqueInput
  }

  /**
   * OrderStage deleteMany
   */
  export type OrderStageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderStages to delete
     */
    where?: OrderStageWhereInput
    /**
     * Limit how many OrderStages to delete.
     */
    limit?: number
  }

  /**
   * OrderStage without action
   */
  export type OrderStageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderStage
     */
    select?: OrderStageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderStage
     */
    omit?: OrderStageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderStageInclude<ExtArgs> | null
  }


  /**
   * Model UploadedFile
   */

  export type AggregateUploadedFile = {
    _count: UploadedFileCountAggregateOutputType | null
    _avg: UploadedFileAvgAggregateOutputType | null
    _sum: UploadedFileSumAggregateOutputType | null
    _min: UploadedFileMinAggregateOutputType | null
    _max: UploadedFileMaxAggregateOutputType | null
  }

  export type UploadedFileAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type UploadedFileSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type UploadedFileMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    ossUrl: string | null
    mimeType: string | null
    sizeBytes: number | null
    originalName: string | null
    sourceType: string | null
    sourceId: string | null
  }

  export type UploadedFileMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    ossUrl: string | null
    mimeType: string | null
    sizeBytes: number | null
    originalName: string | null
    sourceType: string | null
    sourceId: string | null
  }

  export type UploadedFileCountAggregateOutputType = {
    id: number
    createdAt: number
    ossUrl: number
    mimeType: number
    sizeBytes: number
    originalName: number
    sourceType: number
    sourceId: number
    _all: number
  }


  export type UploadedFileAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type UploadedFileSumAggregateInputType = {
    sizeBytes?: true
  }

  export type UploadedFileMinAggregateInputType = {
    id?: true
    createdAt?: true
    ossUrl?: true
    mimeType?: true
    sizeBytes?: true
    originalName?: true
    sourceType?: true
    sourceId?: true
  }

  export type UploadedFileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    ossUrl?: true
    mimeType?: true
    sizeBytes?: true
    originalName?: true
    sourceType?: true
    sourceId?: true
  }

  export type UploadedFileCountAggregateInputType = {
    id?: true
    createdAt?: true
    ossUrl?: true
    mimeType?: true
    sizeBytes?: true
    originalName?: true
    sourceType?: true
    sourceId?: true
    _all?: true
  }

  export type UploadedFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedFile to aggregate.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadedFiles
    **/
    _count?: true | UploadedFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadedFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadedFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadedFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadedFileMaxAggregateInputType
  }

  export type GetUploadedFileAggregateType<T extends UploadedFileAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadedFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadedFile[P]>
      : GetScalarType<T[P], AggregateUploadedFile[P]>
  }




  export type UploadedFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadedFileWhereInput
    orderBy?: UploadedFileOrderByWithAggregationInput | UploadedFileOrderByWithAggregationInput[]
    by: UploadedFileScalarFieldEnum[] | UploadedFileScalarFieldEnum
    having?: UploadedFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadedFileCountAggregateInputType | true
    _avg?: UploadedFileAvgAggregateInputType
    _sum?: UploadedFileSumAggregateInputType
    _min?: UploadedFileMinAggregateInputType
    _max?: UploadedFileMaxAggregateInputType
  }

  export type UploadedFileGroupByOutputType = {
    id: string
    createdAt: Date
    ossUrl: string
    mimeType: string
    sizeBytes: number | null
    originalName: string | null
    sourceType: string
    sourceId: string | null
    _count: UploadedFileCountAggregateOutputType | null
    _avg: UploadedFileAvgAggregateOutputType | null
    _sum: UploadedFileSumAggregateOutputType | null
    _min: UploadedFileMinAggregateOutputType | null
    _max: UploadedFileMaxAggregateOutputType | null
  }

  type GetUploadedFileGroupByPayload<T extends UploadedFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadedFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadedFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadedFileGroupByOutputType[P]>
            : GetScalarType<T[P], UploadedFileGroupByOutputType[P]>
        }
      >
    >


  export type UploadedFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    ossUrl?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    originalName?: boolean
    sourceType?: boolean
    sourceId?: boolean
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    ossUrl?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    originalName?: boolean
    sourceType?: boolean
    sourceId?: boolean
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    ossUrl?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    originalName?: boolean
    sourceType?: boolean
    sourceId?: boolean
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    ossUrl?: boolean
    mimeType?: boolean
    sizeBytes?: boolean
    originalName?: boolean
    sourceType?: boolean
    sourceId?: boolean
  }

  export type UploadedFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "ossUrl" | "mimeType" | "sizeBytes" | "originalName" | "sourceType" | "sourceId", ExtArgs["result"]["uploadedFile"]>

  export type $UploadedFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadedFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      ossUrl: string
      mimeType: string
      sizeBytes: number | null
      originalName: string | null
      sourceType: string
      sourceId: string | null
    }, ExtArgs["result"]["uploadedFile"]>
    composites: {}
  }

  type UploadedFileGetPayload<S extends boolean | null | undefined | UploadedFileDefaultArgs> = $Result.GetResult<Prisma.$UploadedFilePayload, S>

  type UploadedFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadedFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadedFileCountAggregateInputType | true
    }

  export interface UploadedFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadedFile'], meta: { name: 'UploadedFile' } }
    /**
     * Find zero or one UploadedFile that matches the filter.
     * @param {UploadedFileFindUniqueArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadedFileFindUniqueArgs>(args: SelectSubset<T, UploadedFileFindUniqueArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadedFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadedFileFindUniqueOrThrowArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadedFileFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadedFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindFirstArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadedFileFindFirstArgs>(args?: SelectSubset<T, UploadedFileFindFirstArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindFirstOrThrowArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadedFileFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadedFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadedFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadedFiles
     * const uploadedFiles = await prisma.uploadedFile.findMany()
     * 
     * // Get first 10 UploadedFiles
     * const uploadedFiles = await prisma.uploadedFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadedFileFindManyArgs>(args?: SelectSubset<T, UploadedFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadedFile.
     * @param {UploadedFileCreateArgs} args - Arguments to create a UploadedFile.
     * @example
     * // Create one UploadedFile
     * const UploadedFile = await prisma.uploadedFile.create({
     *   data: {
     *     // ... data to create a UploadedFile
     *   }
     * })
     * 
     */
    create<T extends UploadedFileCreateArgs>(args: SelectSubset<T, UploadedFileCreateArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadedFiles.
     * @param {UploadedFileCreateManyArgs} args - Arguments to create many UploadedFiles.
     * @example
     * // Create many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadedFileCreateManyArgs>(args?: SelectSubset<T, UploadedFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadedFiles and returns the data saved in the database.
     * @param {UploadedFileCreateManyAndReturnArgs} args - Arguments to create many UploadedFiles.
     * @example
     * // Create many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadedFiles and only return the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadedFileCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadedFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadedFile.
     * @param {UploadedFileDeleteArgs} args - Arguments to delete one UploadedFile.
     * @example
     * // Delete one UploadedFile
     * const UploadedFile = await prisma.uploadedFile.delete({
     *   where: {
     *     // ... filter to delete one UploadedFile
     *   }
     * })
     * 
     */
    delete<T extends UploadedFileDeleteArgs>(args: SelectSubset<T, UploadedFileDeleteArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadedFile.
     * @param {UploadedFileUpdateArgs} args - Arguments to update one UploadedFile.
     * @example
     * // Update one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadedFileUpdateArgs>(args: SelectSubset<T, UploadedFileUpdateArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadedFiles.
     * @param {UploadedFileDeleteManyArgs} args - Arguments to filter UploadedFiles to delete.
     * @example
     * // Delete a few UploadedFiles
     * const { count } = await prisma.uploadedFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadedFileDeleteManyArgs>(args?: SelectSubset<T, UploadedFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadedFileUpdateManyArgs>(args: SelectSubset<T, UploadedFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedFiles and returns the data updated in the database.
     * @param {UploadedFileUpdateManyAndReturnArgs} args - Arguments to update many UploadedFiles.
     * @example
     * // Update many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadedFiles and only return the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadedFileUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadedFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadedFile.
     * @param {UploadedFileUpsertArgs} args - Arguments to update or create a UploadedFile.
     * @example
     * // Update or create a UploadedFile
     * const uploadedFile = await prisma.uploadedFile.upsert({
     *   create: {
     *     // ... data to create a UploadedFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadedFile we want to update
     *   }
     * })
     */
    upsert<T extends UploadedFileUpsertArgs>(args: SelectSubset<T, UploadedFileUpsertArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileCountArgs} args - Arguments to filter UploadedFiles to count.
     * @example
     * // Count the number of UploadedFiles
     * const count = await prisma.uploadedFile.count({
     *   where: {
     *     // ... the filter for the UploadedFiles we want to count
     *   }
     * })
    **/
    count<T extends UploadedFileCountArgs>(
      args?: Subset<T, UploadedFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadedFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadedFileAggregateArgs>(args: Subset<T, UploadedFileAggregateArgs>): Prisma.PrismaPromise<GetUploadedFileAggregateType<T>>

    /**
     * Group by UploadedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadedFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadedFileGroupByArgs['orderBy'] }
        : { orderBy?: UploadedFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadedFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadedFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadedFile model
   */
  readonly fields: UploadedFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadedFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadedFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadedFile model
   */
  interface UploadedFileFieldRefs {
    readonly id: FieldRef<"UploadedFile", 'String'>
    readonly createdAt: FieldRef<"UploadedFile", 'DateTime'>
    readonly ossUrl: FieldRef<"UploadedFile", 'String'>
    readonly mimeType: FieldRef<"UploadedFile", 'String'>
    readonly sizeBytes: FieldRef<"UploadedFile", 'Int'>
    readonly originalName: FieldRef<"UploadedFile", 'String'>
    readonly sourceType: FieldRef<"UploadedFile", 'String'>
    readonly sourceId: FieldRef<"UploadedFile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UploadedFile findUnique
   */
  export type UploadedFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile findUniqueOrThrow
   */
  export type UploadedFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile findFirst
   */
  export type UploadedFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile findFirstOrThrow
   */
  export type UploadedFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile findMany
   */
  export type UploadedFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Filter, which UploadedFiles to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile create
   */
  export type UploadedFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data needed to create a UploadedFile.
     */
    data: XOR<UploadedFileCreateInput, UploadedFileUncheckedCreateInput>
  }

  /**
   * UploadedFile createMany
   */
  export type UploadedFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadedFiles.
     */
    data: UploadedFileCreateManyInput | UploadedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedFile createManyAndReturn
   */
  export type UploadedFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data used to create many UploadedFiles.
     */
    data: UploadedFileCreateManyInput | UploadedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedFile update
   */
  export type UploadedFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data needed to update a UploadedFile.
     */
    data: XOR<UploadedFileUpdateInput, UploadedFileUncheckedUpdateInput>
    /**
     * Choose, which UploadedFile to update.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile updateMany
   */
  export type UploadedFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadedFiles.
     */
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyInput>
    /**
     * Filter which UploadedFiles to update
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to update.
     */
    limit?: number
  }

  /**
   * UploadedFile updateManyAndReturn
   */
  export type UploadedFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data used to update UploadedFiles.
     */
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyInput>
    /**
     * Filter which UploadedFiles to update
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to update.
     */
    limit?: number
  }

  /**
   * UploadedFile upsert
   */
  export type UploadedFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The filter to search for the UploadedFile to update in case it exists.
     */
    where: UploadedFileWhereUniqueInput
    /**
     * In case the UploadedFile found by the `where` argument doesn't exist, create a new UploadedFile with this data.
     */
    create: XOR<UploadedFileCreateInput, UploadedFileUncheckedCreateInput>
    /**
     * In case the UploadedFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadedFileUpdateInput, UploadedFileUncheckedUpdateInput>
  }

  /**
   * UploadedFile delete
   */
  export type UploadedFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Filter which UploadedFile to delete.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile deleteMany
   */
  export type UploadedFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedFiles to delete
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to delete.
     */
    limit?: number
  }

  /**
   * UploadedFile without action
   */
  export type UploadedFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    phone: 'phone',
    passwordHash: 'passwordHash',
    sessionToken: 'sessionToken',
    sessionIssuedAt: 'sessionIssuedAt',
    nickname: 'nickname',
    avatarUrl: 'avatarUrl',
    openid: 'openid'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArtisanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    craftTags: 'craftTags',
    portfolio: 'portfolio',
    priceRangeMin: 'priceRangeMin',
    priceRangeMax: 'priceRangeMax',
    avgDays: 'avgDays',
    verified: 'verified',
    active: 'active'
  };

  export type ArtisanScalarFieldEnum = (typeof ArtisanScalarFieldEnum)[keyof typeof ArtisanScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    images: 'images',
    requirementText: 'requirementText',
    preferredCraft: 'preferredCraft',
    budgetRange: 'budgetRange',
    expectedDeliveryDate: 'expectedDeliveryDate',
    status: 'status'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const StructuredRequirementScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    submissionId: 'submissionId',
    category: 'category',
    style: 'style',
    craftPreference: 'craftPreference',
    materialPreference: 'materialPreference',
    colorPreference: 'colorPreference',
    budgetRange: 'budgetRange',
    deliveryDate: 'deliveryDate',
    acceptableVariance: 'acceptableVariance',
    acceptsModification: 'acceptsModification',
    status: 'status',
    aiMode: 'aiMode',
    rawResponse: 'rawResponse'
  };

  export type StructuredRequirementScalarFieldEnum = (typeof StructuredRequirementScalarFieldEnum)[keyof typeof StructuredRequirementScalarFieldEnum]


  export const CraftPlanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    submissionId: 'submissionId',
    structuredRequirementId: 'structuredRequirementId',
    recommendedCraft: 'recommendedCraft',
    recommendationReason: 'recommendationReason',
    planSummary: 'planSummary',
    riskNotes: 'riskNotes',
    timelineRange: 'timelineRange',
    priceRange: 'priceRange',
    status: 'status',
    aiMode: 'aiMode',
    rawResponse: 'rawResponse'
  };

  export type CraftPlanScalarFieldEnum = (typeof CraftPlanScalarFieldEnum)[keyof typeof CraftPlanScalarFieldEnum]


  export const PreviewResultScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    submissionId: 'submissionId',
    planId: 'planId',
    sourceImages: 'sourceImages',
    previewImages: 'previewImages',
    description: 'description',
    status: 'status'
  };

  export type PreviewResultScalarFieldEnum = (typeof PreviewResultScalarFieldEnum)[keyof typeof PreviewResultScalarFieldEnum]


  export const ArtisanMatchScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    planId: 'planId',
    artisanId: 'artisanId',
    name: 'name',
    craftExpertise: 'craftExpertise',
    priceRange: 'priceRange',
    timelineRange: 'timelineRange',
    matchReason: 'matchReason',
    rank: 'rank'
  };

  export type ArtisanMatchScalarFieldEnum = (typeof ArtisanMatchScalarFieldEnum)[keyof typeof ArtisanMatchScalarFieldEnum]


  export const DesignConfirmationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    submissionId: 'submissionId',
    planId: 'planId',
    title: 'title',
    sections: 'sections',
    status: 'status'
  };

  export type DesignConfirmationScalarFieldEnum = (typeof DesignConfirmationScalarFieldEnum)[keyof typeof DesignConfirmationScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    artisanId: 'artisanId',
    submissionId: 'submissionId',
    designConfirmationId: 'designConfirmationId',
    status: 'status',
    totalPriceFen: 'totalPriceFen',
    agreedDeliveryDate: 'agreedDeliveryDate',
    notes: 'notes'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderMessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    orderId: 'orderId',
    senderType: 'senderType',
    userId: 'userId',
    artisanId: 'artisanId',
    content: 'content',
    attachments: 'attachments'
  };

  export type OrderMessageScalarFieldEnum = (typeof OrderMessageScalarFieldEnum)[keyof typeof OrderMessageScalarFieldEnum]


  export const OrderStageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderId: 'orderId',
    sequence: 'sequence',
    title: 'title',
    detail: 'detail',
    status: 'status',
    doneAt: 'doneAt'
  };

  export type OrderStageScalarFieldEnum = (typeof OrderStageScalarFieldEnum)[keyof typeof OrderStageScalarFieldEnum]


  export const UploadedFileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    ossUrl: 'ossUrl',
    mimeType: 'mimeType',
    sizeBytes: 'sizeBytes',
    originalName: 'originalName',
    sourceType: 'sourceType',
    sourceId: 'sourceId'
  };

  export type UploadedFileScalarFieldEnum = (typeof UploadedFileScalarFieldEnum)[keyof typeof UploadedFileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    sessionToken?: StringNullableFilter<"User"> | string | null
    sessionIssuedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    openid?: StringNullableFilter<"User"> | string | null
    submissions?: SubmissionListRelationFilter
    orders?: OrderListRelationFilter
    orderMessages?: OrderMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    sessionIssuedAt?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    openid?: SortOrderInput | SortOrder
    submissions?: SubmissionOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    orderMessages?: OrderMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    sessionToken?: string
    openid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    sessionIssuedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    nickname?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    submissions?: SubmissionListRelationFilter
    orders?: OrderListRelationFilter
    orderMessages?: OrderMessageListRelationFilter
  }, "id" | "phone" | "sessionToken" | "openid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    sessionIssuedAt?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    openid?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    sessionToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    sessionIssuedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    openid?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ArtisanWhereInput = {
    AND?: ArtisanWhereInput | ArtisanWhereInput[]
    OR?: ArtisanWhereInput[]
    NOT?: ArtisanWhereInput | ArtisanWhereInput[]
    id?: StringFilter<"Artisan"> | string
    createdAt?: DateTimeFilter<"Artisan"> | Date | string
    updatedAt?: DateTimeFilter<"Artisan"> | Date | string
    name?: StringFilter<"Artisan"> | string
    bio?: StringNullableFilter<"Artisan"> | string | null
    avatarUrl?: StringNullableFilter<"Artisan"> | string | null
    craftTags?: JsonFilter<"Artisan">
    portfolio?: JsonFilter<"Artisan">
    priceRangeMin?: IntFilter<"Artisan"> | number
    priceRangeMax?: IntFilter<"Artisan"> | number
    avgDays?: IntFilter<"Artisan"> | number
    verified?: BoolFilter<"Artisan"> | boolean
    active?: BoolFilter<"Artisan"> | boolean
    artisanMatches?: ArtisanMatchListRelationFilter
    orders?: OrderListRelationFilter
    orderMessages?: OrderMessageListRelationFilter
  }

  export type ArtisanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    craftTags?: SortOrder
    portfolio?: SortOrder
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    avgDays?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    artisanMatches?: ArtisanMatchOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    orderMessages?: OrderMessageOrderByRelationAggregateInput
  }

  export type ArtisanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtisanWhereInput | ArtisanWhereInput[]
    OR?: ArtisanWhereInput[]
    NOT?: ArtisanWhereInput | ArtisanWhereInput[]
    createdAt?: DateTimeFilter<"Artisan"> | Date | string
    updatedAt?: DateTimeFilter<"Artisan"> | Date | string
    name?: StringFilter<"Artisan"> | string
    bio?: StringNullableFilter<"Artisan"> | string | null
    avatarUrl?: StringNullableFilter<"Artisan"> | string | null
    craftTags?: JsonFilter<"Artisan">
    portfolio?: JsonFilter<"Artisan">
    priceRangeMin?: IntFilter<"Artisan"> | number
    priceRangeMax?: IntFilter<"Artisan"> | number
    avgDays?: IntFilter<"Artisan"> | number
    verified?: BoolFilter<"Artisan"> | boolean
    active?: BoolFilter<"Artisan"> | boolean
    artisanMatches?: ArtisanMatchListRelationFilter
    orders?: OrderListRelationFilter
    orderMessages?: OrderMessageListRelationFilter
  }, "id">

  export type ArtisanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    craftTags?: SortOrder
    portfolio?: SortOrder
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    avgDays?: SortOrder
    verified?: SortOrder
    active?: SortOrder
    _count?: ArtisanCountOrderByAggregateInput
    _avg?: ArtisanAvgOrderByAggregateInput
    _max?: ArtisanMaxOrderByAggregateInput
    _min?: ArtisanMinOrderByAggregateInput
    _sum?: ArtisanSumOrderByAggregateInput
  }

  export type ArtisanScalarWhereWithAggregatesInput = {
    AND?: ArtisanScalarWhereWithAggregatesInput | ArtisanScalarWhereWithAggregatesInput[]
    OR?: ArtisanScalarWhereWithAggregatesInput[]
    NOT?: ArtisanScalarWhereWithAggregatesInput | ArtisanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artisan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Artisan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artisan"> | Date | string
    name?: StringWithAggregatesFilter<"Artisan"> | string
    bio?: StringNullableWithAggregatesFilter<"Artisan"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Artisan"> | string | null
    craftTags?: JsonWithAggregatesFilter<"Artisan">
    portfolio?: JsonWithAggregatesFilter<"Artisan">
    priceRangeMin?: IntWithAggregatesFilter<"Artisan"> | number
    priceRangeMax?: IntWithAggregatesFilter<"Artisan"> | number
    avgDays?: IntWithAggregatesFilter<"Artisan"> | number
    verified?: BoolWithAggregatesFilter<"Artisan"> | boolean
    active?: BoolWithAggregatesFilter<"Artisan"> | boolean
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringNullableFilter<"Submission"> | string | null
    images?: JsonFilter<"Submission">
    requirementText?: StringFilter<"Submission"> | string
    preferredCraft?: StringFilter<"Submission"> | string
    budgetRange?: StringFilter<"Submission"> | string
    expectedDeliveryDate?: StringFilter<"Submission"> | string
    status?: StringFilter<"Submission"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    structuredRequirement?: XOR<StructuredRequirementNullableScalarRelationFilter, StructuredRequirementWhereInput> | null
    plan?: XOR<CraftPlanNullableScalarRelationFilter, CraftPlanWhereInput> | null
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    images?: SortOrder
    requirementText?: SortOrder
    preferredCraft?: SortOrder
    budgetRange?: SortOrder
    expectedDeliveryDate?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    structuredRequirement?: StructuredRequirementOrderByWithRelationInput
    plan?: CraftPlanOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringNullableFilter<"Submission"> | string | null
    images?: JsonFilter<"Submission">
    requirementText?: StringFilter<"Submission"> | string
    preferredCraft?: StringFilter<"Submission"> | string
    budgetRange?: StringFilter<"Submission"> | string
    expectedDeliveryDate?: StringFilter<"Submission"> | string
    status?: StringFilter<"Submission"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    structuredRequirement?: XOR<StructuredRequirementNullableScalarRelationFilter, StructuredRequirementWhereInput> | null
    plan?: XOR<CraftPlanNullableScalarRelationFilter, CraftPlanWhereInput> | null
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    images?: SortOrder
    requirementText?: SortOrder
    preferredCraft?: SortOrder
    budgetRange?: SortOrder
    expectedDeliveryDate?: SortOrder
    status?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    images?: JsonWithAggregatesFilter<"Submission">
    requirementText?: StringWithAggregatesFilter<"Submission"> | string
    preferredCraft?: StringWithAggregatesFilter<"Submission"> | string
    budgetRange?: StringWithAggregatesFilter<"Submission"> | string
    expectedDeliveryDate?: StringWithAggregatesFilter<"Submission"> | string
    status?: StringWithAggregatesFilter<"Submission"> | string
  }

  export type StructuredRequirementWhereInput = {
    AND?: StructuredRequirementWhereInput | StructuredRequirementWhereInput[]
    OR?: StructuredRequirementWhereInput[]
    NOT?: StructuredRequirementWhereInput | StructuredRequirementWhereInput[]
    id?: StringFilter<"StructuredRequirement"> | string
    createdAt?: DateTimeFilter<"StructuredRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"StructuredRequirement"> | Date | string
    submissionId?: StringFilter<"StructuredRequirement"> | string
    category?: StringFilter<"StructuredRequirement"> | string
    style?: StringFilter<"StructuredRequirement"> | string
    craftPreference?: StringFilter<"StructuredRequirement"> | string
    materialPreference?: StringFilter<"StructuredRequirement"> | string
    colorPreference?: StringFilter<"StructuredRequirement"> | string
    budgetRange?: StringFilter<"StructuredRequirement"> | string
    deliveryDate?: StringFilter<"StructuredRequirement"> | string
    acceptableVariance?: StringFilter<"StructuredRequirement"> | string
    acceptsModification?: BoolFilter<"StructuredRequirement"> | boolean
    status?: StringFilter<"StructuredRequirement"> | string
    aiMode?: StringFilter<"StructuredRequirement"> | string
    rawResponse?: JsonNullableFilter<"StructuredRequirement">
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type StructuredRequirementOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    category?: SortOrder
    style?: SortOrder
    craftPreference?: SortOrder
    materialPreference?: SortOrder
    colorPreference?: SortOrder
    budgetRange?: SortOrder
    deliveryDate?: SortOrder
    acceptableVariance?: SortOrder
    acceptsModification?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
    rawResponse?: SortOrderInput | SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type StructuredRequirementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    submissionId?: string
    AND?: StructuredRequirementWhereInput | StructuredRequirementWhereInput[]
    OR?: StructuredRequirementWhereInput[]
    NOT?: StructuredRequirementWhereInput | StructuredRequirementWhereInput[]
    createdAt?: DateTimeFilter<"StructuredRequirement"> | Date | string
    updatedAt?: DateTimeFilter<"StructuredRequirement"> | Date | string
    category?: StringFilter<"StructuredRequirement"> | string
    style?: StringFilter<"StructuredRequirement"> | string
    craftPreference?: StringFilter<"StructuredRequirement"> | string
    materialPreference?: StringFilter<"StructuredRequirement"> | string
    colorPreference?: StringFilter<"StructuredRequirement"> | string
    budgetRange?: StringFilter<"StructuredRequirement"> | string
    deliveryDate?: StringFilter<"StructuredRequirement"> | string
    acceptableVariance?: StringFilter<"StructuredRequirement"> | string
    acceptsModification?: BoolFilter<"StructuredRequirement"> | boolean
    status?: StringFilter<"StructuredRequirement"> | string
    aiMode?: StringFilter<"StructuredRequirement"> | string
    rawResponse?: JsonNullableFilter<"StructuredRequirement">
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id" | "submissionId">

  export type StructuredRequirementOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    category?: SortOrder
    style?: SortOrder
    craftPreference?: SortOrder
    materialPreference?: SortOrder
    colorPreference?: SortOrder
    budgetRange?: SortOrder
    deliveryDate?: SortOrder
    acceptableVariance?: SortOrder
    acceptsModification?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
    rawResponse?: SortOrderInput | SortOrder
    _count?: StructuredRequirementCountOrderByAggregateInput
    _max?: StructuredRequirementMaxOrderByAggregateInput
    _min?: StructuredRequirementMinOrderByAggregateInput
  }

  export type StructuredRequirementScalarWhereWithAggregatesInput = {
    AND?: StructuredRequirementScalarWhereWithAggregatesInput | StructuredRequirementScalarWhereWithAggregatesInput[]
    OR?: StructuredRequirementScalarWhereWithAggregatesInput[]
    NOT?: StructuredRequirementScalarWhereWithAggregatesInput | StructuredRequirementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StructuredRequirement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StructuredRequirement"> | Date | string
    submissionId?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    category?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    style?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    craftPreference?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    materialPreference?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    colorPreference?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    budgetRange?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    deliveryDate?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    acceptableVariance?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    acceptsModification?: BoolWithAggregatesFilter<"StructuredRequirement"> | boolean
    status?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    aiMode?: StringWithAggregatesFilter<"StructuredRequirement"> | string
    rawResponse?: JsonNullableWithAggregatesFilter<"StructuredRequirement">
  }

  export type CraftPlanWhereInput = {
    AND?: CraftPlanWhereInput | CraftPlanWhereInput[]
    OR?: CraftPlanWhereInput[]
    NOT?: CraftPlanWhereInput | CraftPlanWhereInput[]
    id?: StringFilter<"CraftPlan"> | string
    createdAt?: DateTimeFilter<"CraftPlan"> | Date | string
    updatedAt?: DateTimeFilter<"CraftPlan"> | Date | string
    submissionId?: StringFilter<"CraftPlan"> | string
    structuredRequirementId?: StringFilter<"CraftPlan"> | string
    recommendedCraft?: StringFilter<"CraftPlan"> | string
    recommendationReason?: StringFilter<"CraftPlan"> | string
    planSummary?: StringFilter<"CraftPlan"> | string
    riskNotes?: JsonFilter<"CraftPlan">
    timelineRange?: StringFilter<"CraftPlan"> | string
    priceRange?: StringFilter<"CraftPlan"> | string
    status?: StringFilter<"CraftPlan"> | string
    aiMode?: StringFilter<"CraftPlan"> | string
    rawResponse?: JsonNullableFilter<"CraftPlan">
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    preview?: XOR<PreviewResultNullableScalarRelationFilter, PreviewResultWhereInput> | null
    artisanMatches?: ArtisanMatchListRelationFilter
    designConfirmation?: XOR<DesignConfirmationNullableScalarRelationFilter, DesignConfirmationWhereInput> | null
  }

  export type CraftPlanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    structuredRequirementId?: SortOrder
    recommendedCraft?: SortOrder
    recommendationReason?: SortOrder
    planSummary?: SortOrder
    riskNotes?: SortOrder
    timelineRange?: SortOrder
    priceRange?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
    rawResponse?: SortOrderInput | SortOrder
    submission?: SubmissionOrderByWithRelationInput
    preview?: PreviewResultOrderByWithRelationInput
    artisanMatches?: ArtisanMatchOrderByRelationAggregateInput
    designConfirmation?: DesignConfirmationOrderByWithRelationInput
  }

  export type CraftPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    submissionId?: string
    AND?: CraftPlanWhereInput | CraftPlanWhereInput[]
    OR?: CraftPlanWhereInput[]
    NOT?: CraftPlanWhereInput | CraftPlanWhereInput[]
    createdAt?: DateTimeFilter<"CraftPlan"> | Date | string
    updatedAt?: DateTimeFilter<"CraftPlan"> | Date | string
    structuredRequirementId?: StringFilter<"CraftPlan"> | string
    recommendedCraft?: StringFilter<"CraftPlan"> | string
    recommendationReason?: StringFilter<"CraftPlan"> | string
    planSummary?: StringFilter<"CraftPlan"> | string
    riskNotes?: JsonFilter<"CraftPlan">
    timelineRange?: StringFilter<"CraftPlan"> | string
    priceRange?: StringFilter<"CraftPlan"> | string
    status?: StringFilter<"CraftPlan"> | string
    aiMode?: StringFilter<"CraftPlan"> | string
    rawResponse?: JsonNullableFilter<"CraftPlan">
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    preview?: XOR<PreviewResultNullableScalarRelationFilter, PreviewResultWhereInput> | null
    artisanMatches?: ArtisanMatchListRelationFilter
    designConfirmation?: XOR<DesignConfirmationNullableScalarRelationFilter, DesignConfirmationWhereInput> | null
  }, "id" | "submissionId">

  export type CraftPlanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    structuredRequirementId?: SortOrder
    recommendedCraft?: SortOrder
    recommendationReason?: SortOrder
    planSummary?: SortOrder
    riskNotes?: SortOrder
    timelineRange?: SortOrder
    priceRange?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
    rawResponse?: SortOrderInput | SortOrder
    _count?: CraftPlanCountOrderByAggregateInput
    _max?: CraftPlanMaxOrderByAggregateInput
    _min?: CraftPlanMinOrderByAggregateInput
  }

  export type CraftPlanScalarWhereWithAggregatesInput = {
    AND?: CraftPlanScalarWhereWithAggregatesInput | CraftPlanScalarWhereWithAggregatesInput[]
    OR?: CraftPlanScalarWhereWithAggregatesInput[]
    NOT?: CraftPlanScalarWhereWithAggregatesInput | CraftPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CraftPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CraftPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CraftPlan"> | Date | string
    submissionId?: StringWithAggregatesFilter<"CraftPlan"> | string
    structuredRequirementId?: StringWithAggregatesFilter<"CraftPlan"> | string
    recommendedCraft?: StringWithAggregatesFilter<"CraftPlan"> | string
    recommendationReason?: StringWithAggregatesFilter<"CraftPlan"> | string
    planSummary?: StringWithAggregatesFilter<"CraftPlan"> | string
    riskNotes?: JsonWithAggregatesFilter<"CraftPlan">
    timelineRange?: StringWithAggregatesFilter<"CraftPlan"> | string
    priceRange?: StringWithAggregatesFilter<"CraftPlan"> | string
    status?: StringWithAggregatesFilter<"CraftPlan"> | string
    aiMode?: StringWithAggregatesFilter<"CraftPlan"> | string
    rawResponse?: JsonNullableWithAggregatesFilter<"CraftPlan">
  }

  export type PreviewResultWhereInput = {
    AND?: PreviewResultWhereInput | PreviewResultWhereInput[]
    OR?: PreviewResultWhereInput[]
    NOT?: PreviewResultWhereInput | PreviewResultWhereInput[]
    id?: StringFilter<"PreviewResult"> | string
    createdAt?: DateTimeFilter<"PreviewResult"> | Date | string
    updatedAt?: DateTimeFilter<"PreviewResult"> | Date | string
    submissionId?: StringFilter<"PreviewResult"> | string
    planId?: StringFilter<"PreviewResult"> | string
    sourceImages?: JsonFilter<"PreviewResult">
    previewImages?: JsonFilter<"PreviewResult">
    description?: StringFilter<"PreviewResult"> | string
    status?: StringFilter<"PreviewResult"> | string
    plan?: XOR<CraftPlanScalarRelationFilter, CraftPlanWhereInput>
  }

  export type PreviewResultOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    sourceImages?: SortOrder
    previewImages?: SortOrder
    description?: SortOrder
    status?: SortOrder
    plan?: CraftPlanOrderByWithRelationInput
  }

  export type PreviewResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId?: string
    AND?: PreviewResultWhereInput | PreviewResultWhereInput[]
    OR?: PreviewResultWhereInput[]
    NOT?: PreviewResultWhereInput | PreviewResultWhereInput[]
    createdAt?: DateTimeFilter<"PreviewResult"> | Date | string
    updatedAt?: DateTimeFilter<"PreviewResult"> | Date | string
    submissionId?: StringFilter<"PreviewResult"> | string
    sourceImages?: JsonFilter<"PreviewResult">
    previewImages?: JsonFilter<"PreviewResult">
    description?: StringFilter<"PreviewResult"> | string
    status?: StringFilter<"PreviewResult"> | string
    plan?: XOR<CraftPlanScalarRelationFilter, CraftPlanWhereInput>
  }, "id" | "planId">

  export type PreviewResultOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    sourceImages?: SortOrder
    previewImages?: SortOrder
    description?: SortOrder
    status?: SortOrder
    _count?: PreviewResultCountOrderByAggregateInput
    _max?: PreviewResultMaxOrderByAggregateInput
    _min?: PreviewResultMinOrderByAggregateInput
  }

  export type PreviewResultScalarWhereWithAggregatesInput = {
    AND?: PreviewResultScalarWhereWithAggregatesInput | PreviewResultScalarWhereWithAggregatesInput[]
    OR?: PreviewResultScalarWhereWithAggregatesInput[]
    NOT?: PreviewResultScalarWhereWithAggregatesInput | PreviewResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PreviewResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PreviewResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PreviewResult"> | Date | string
    submissionId?: StringWithAggregatesFilter<"PreviewResult"> | string
    planId?: StringWithAggregatesFilter<"PreviewResult"> | string
    sourceImages?: JsonWithAggregatesFilter<"PreviewResult">
    previewImages?: JsonWithAggregatesFilter<"PreviewResult">
    description?: StringWithAggregatesFilter<"PreviewResult"> | string
    status?: StringWithAggregatesFilter<"PreviewResult"> | string
  }

  export type ArtisanMatchWhereInput = {
    AND?: ArtisanMatchWhereInput | ArtisanMatchWhereInput[]
    OR?: ArtisanMatchWhereInput[]
    NOT?: ArtisanMatchWhereInput | ArtisanMatchWhereInput[]
    id?: StringFilter<"ArtisanMatch"> | string
    createdAt?: DateTimeFilter<"ArtisanMatch"> | Date | string
    planId?: StringFilter<"ArtisanMatch"> | string
    artisanId?: StringNullableFilter<"ArtisanMatch"> | string | null
    name?: StringFilter<"ArtisanMatch"> | string
    craftExpertise?: StringFilter<"ArtisanMatch"> | string
    priceRange?: StringFilter<"ArtisanMatch"> | string
    timelineRange?: StringFilter<"ArtisanMatch"> | string
    matchReason?: StringFilter<"ArtisanMatch"> | string
    rank?: IntFilter<"ArtisanMatch"> | number
    plan?: XOR<CraftPlanScalarRelationFilter, CraftPlanWhereInput>
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
  }

  export type ArtisanMatchOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    artisanId?: SortOrderInput | SortOrder
    name?: SortOrder
    craftExpertise?: SortOrder
    priceRange?: SortOrder
    timelineRange?: SortOrder
    matchReason?: SortOrder
    rank?: SortOrder
    plan?: CraftPlanOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
  }

  export type ArtisanMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtisanMatchWhereInput | ArtisanMatchWhereInput[]
    OR?: ArtisanMatchWhereInput[]
    NOT?: ArtisanMatchWhereInput | ArtisanMatchWhereInput[]
    createdAt?: DateTimeFilter<"ArtisanMatch"> | Date | string
    planId?: StringFilter<"ArtisanMatch"> | string
    artisanId?: StringNullableFilter<"ArtisanMatch"> | string | null
    name?: StringFilter<"ArtisanMatch"> | string
    craftExpertise?: StringFilter<"ArtisanMatch"> | string
    priceRange?: StringFilter<"ArtisanMatch"> | string
    timelineRange?: StringFilter<"ArtisanMatch"> | string
    matchReason?: StringFilter<"ArtisanMatch"> | string
    rank?: IntFilter<"ArtisanMatch"> | number
    plan?: XOR<CraftPlanScalarRelationFilter, CraftPlanWhereInput>
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
  }, "id">

  export type ArtisanMatchOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    artisanId?: SortOrderInput | SortOrder
    name?: SortOrder
    craftExpertise?: SortOrder
    priceRange?: SortOrder
    timelineRange?: SortOrder
    matchReason?: SortOrder
    rank?: SortOrder
    _count?: ArtisanMatchCountOrderByAggregateInput
    _avg?: ArtisanMatchAvgOrderByAggregateInput
    _max?: ArtisanMatchMaxOrderByAggregateInput
    _min?: ArtisanMatchMinOrderByAggregateInput
    _sum?: ArtisanMatchSumOrderByAggregateInput
  }

  export type ArtisanMatchScalarWhereWithAggregatesInput = {
    AND?: ArtisanMatchScalarWhereWithAggregatesInput | ArtisanMatchScalarWhereWithAggregatesInput[]
    OR?: ArtisanMatchScalarWhereWithAggregatesInput[]
    NOT?: ArtisanMatchScalarWhereWithAggregatesInput | ArtisanMatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArtisanMatch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ArtisanMatch"> | Date | string
    planId?: StringWithAggregatesFilter<"ArtisanMatch"> | string
    artisanId?: StringNullableWithAggregatesFilter<"ArtisanMatch"> | string | null
    name?: StringWithAggregatesFilter<"ArtisanMatch"> | string
    craftExpertise?: StringWithAggregatesFilter<"ArtisanMatch"> | string
    priceRange?: StringWithAggregatesFilter<"ArtisanMatch"> | string
    timelineRange?: StringWithAggregatesFilter<"ArtisanMatch"> | string
    matchReason?: StringWithAggregatesFilter<"ArtisanMatch"> | string
    rank?: IntWithAggregatesFilter<"ArtisanMatch"> | number
  }

  export type DesignConfirmationWhereInput = {
    AND?: DesignConfirmationWhereInput | DesignConfirmationWhereInput[]
    OR?: DesignConfirmationWhereInput[]
    NOT?: DesignConfirmationWhereInput | DesignConfirmationWhereInput[]
    id?: StringFilter<"DesignConfirmation"> | string
    createdAt?: DateTimeFilter<"DesignConfirmation"> | Date | string
    updatedAt?: DateTimeFilter<"DesignConfirmation"> | Date | string
    submissionId?: StringFilter<"DesignConfirmation"> | string
    planId?: StringFilter<"DesignConfirmation"> | string
    title?: StringFilter<"DesignConfirmation"> | string
    sections?: JsonFilter<"DesignConfirmation">
    status?: StringFilter<"DesignConfirmation"> | string
    plan?: XOR<CraftPlanScalarRelationFilter, CraftPlanWhereInput>
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type DesignConfirmationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    sections?: SortOrder
    status?: SortOrder
    plan?: CraftPlanOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
  }

  export type DesignConfirmationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    planId?: string
    AND?: DesignConfirmationWhereInput | DesignConfirmationWhereInput[]
    OR?: DesignConfirmationWhereInput[]
    NOT?: DesignConfirmationWhereInput | DesignConfirmationWhereInput[]
    createdAt?: DateTimeFilter<"DesignConfirmation"> | Date | string
    updatedAt?: DateTimeFilter<"DesignConfirmation"> | Date | string
    submissionId?: StringFilter<"DesignConfirmation"> | string
    title?: StringFilter<"DesignConfirmation"> | string
    sections?: JsonFilter<"DesignConfirmation">
    status?: StringFilter<"DesignConfirmation"> | string
    plan?: XOR<CraftPlanScalarRelationFilter, CraftPlanWhereInput>
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id" | "planId">

  export type DesignConfirmationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    sections?: SortOrder
    status?: SortOrder
    _count?: DesignConfirmationCountOrderByAggregateInput
    _max?: DesignConfirmationMaxOrderByAggregateInput
    _min?: DesignConfirmationMinOrderByAggregateInput
  }

  export type DesignConfirmationScalarWhereWithAggregatesInput = {
    AND?: DesignConfirmationScalarWhereWithAggregatesInput | DesignConfirmationScalarWhereWithAggregatesInput[]
    OR?: DesignConfirmationScalarWhereWithAggregatesInput[]
    NOT?: DesignConfirmationScalarWhereWithAggregatesInput | DesignConfirmationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DesignConfirmation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DesignConfirmation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DesignConfirmation"> | Date | string
    submissionId?: StringWithAggregatesFilter<"DesignConfirmation"> | string
    planId?: StringWithAggregatesFilter<"DesignConfirmation"> | string
    title?: StringWithAggregatesFilter<"DesignConfirmation"> | string
    sections?: JsonWithAggregatesFilter<"DesignConfirmation">
    status?: StringWithAggregatesFilter<"DesignConfirmation"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringFilter<"Order"> | string
    artisanId?: StringFilter<"Order"> | string
    submissionId?: StringFilter<"Order"> | string
    designConfirmationId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    totalPriceFen?: IntFilter<"Order"> | number
    agreedDeliveryDate?: StringFilter<"Order"> | string
    notes?: StringNullableFilter<"Order"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artisan?: XOR<ArtisanScalarRelationFilter, ArtisanWhereInput>
    designConfirmation?: XOR<DesignConfirmationScalarRelationFilter, DesignConfirmationWhereInput>
    messages?: OrderMessageListRelationFilter
    stages?: OrderStageListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    submissionId?: SortOrder
    designConfirmationId?: SortOrder
    status?: SortOrder
    totalPriceFen?: SortOrder
    agreedDeliveryDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
    designConfirmation?: DesignConfirmationOrderByWithRelationInput
    messages?: OrderMessageOrderByRelationAggregateInput
    stages?: OrderStageOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    designConfirmationId?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringFilter<"Order"> | string
    artisanId?: StringFilter<"Order"> | string
    submissionId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    totalPriceFen?: IntFilter<"Order"> | number
    agreedDeliveryDate?: StringFilter<"Order"> | string
    notes?: StringNullableFilter<"Order"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    artisan?: XOR<ArtisanScalarRelationFilter, ArtisanWhereInput>
    designConfirmation?: XOR<DesignConfirmationScalarRelationFilter, DesignConfirmationWhereInput>
    messages?: OrderMessageListRelationFilter
    stages?: OrderStageListRelationFilter
  }, "id" | "designConfirmationId">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    submissionId?: SortOrder
    designConfirmationId?: SortOrder
    status?: SortOrder
    totalPriceFen?: SortOrder
    agreedDeliveryDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    artisanId?: StringWithAggregatesFilter<"Order"> | string
    submissionId?: StringWithAggregatesFilter<"Order"> | string
    designConfirmationId?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    totalPriceFen?: IntWithAggregatesFilter<"Order"> | number
    agreedDeliveryDate?: StringWithAggregatesFilter<"Order"> | string
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderMessageWhereInput = {
    AND?: OrderMessageWhereInput | OrderMessageWhereInput[]
    OR?: OrderMessageWhereInput[]
    NOT?: OrderMessageWhereInput | OrderMessageWhereInput[]
    id?: StringFilter<"OrderMessage"> | string
    createdAt?: DateTimeFilter<"OrderMessage"> | Date | string
    orderId?: StringFilter<"OrderMessage"> | string
    senderType?: StringFilter<"OrderMessage"> | string
    userId?: StringNullableFilter<"OrderMessage"> | string | null
    artisanId?: StringNullableFilter<"OrderMessage"> | string | null
    content?: StringFilter<"OrderMessage"> | string
    attachments?: JsonFilter<"OrderMessage">
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
  }

  export type OrderMessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    senderType?: SortOrder
    userId?: SortOrderInput | SortOrder
    artisanId?: SortOrderInput | SortOrder
    content?: SortOrder
    attachments?: SortOrder
    order?: OrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    artisan?: ArtisanOrderByWithRelationInput
  }

  export type OrderMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderMessageWhereInput | OrderMessageWhereInput[]
    OR?: OrderMessageWhereInput[]
    NOT?: OrderMessageWhereInput | OrderMessageWhereInput[]
    createdAt?: DateTimeFilter<"OrderMessage"> | Date | string
    orderId?: StringFilter<"OrderMessage"> | string
    senderType?: StringFilter<"OrderMessage"> | string
    userId?: StringNullableFilter<"OrderMessage"> | string | null
    artisanId?: StringNullableFilter<"OrderMessage"> | string | null
    content?: StringFilter<"OrderMessage"> | string
    attachments?: JsonFilter<"OrderMessage">
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    artisan?: XOR<ArtisanNullableScalarRelationFilter, ArtisanWhereInput> | null
  }, "id">

  export type OrderMessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    senderType?: SortOrder
    userId?: SortOrderInput | SortOrder
    artisanId?: SortOrderInput | SortOrder
    content?: SortOrder
    attachments?: SortOrder
    _count?: OrderMessageCountOrderByAggregateInput
    _max?: OrderMessageMaxOrderByAggregateInput
    _min?: OrderMessageMinOrderByAggregateInput
  }

  export type OrderMessageScalarWhereWithAggregatesInput = {
    AND?: OrderMessageScalarWhereWithAggregatesInput | OrderMessageScalarWhereWithAggregatesInput[]
    OR?: OrderMessageScalarWhereWithAggregatesInput[]
    NOT?: OrderMessageScalarWhereWithAggregatesInput | OrderMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderMessage"> | Date | string
    orderId?: StringWithAggregatesFilter<"OrderMessage"> | string
    senderType?: StringWithAggregatesFilter<"OrderMessage"> | string
    userId?: StringNullableWithAggregatesFilter<"OrderMessage"> | string | null
    artisanId?: StringNullableWithAggregatesFilter<"OrderMessage"> | string | null
    content?: StringWithAggregatesFilter<"OrderMessage"> | string
    attachments?: JsonWithAggregatesFilter<"OrderMessage">
  }

  export type OrderStageWhereInput = {
    AND?: OrderStageWhereInput | OrderStageWhereInput[]
    OR?: OrderStageWhereInput[]
    NOT?: OrderStageWhereInput | OrderStageWhereInput[]
    id?: StringFilter<"OrderStage"> | string
    createdAt?: DateTimeFilter<"OrderStage"> | Date | string
    updatedAt?: DateTimeFilter<"OrderStage"> | Date | string
    orderId?: StringFilter<"OrderStage"> | string
    sequence?: IntFilter<"OrderStage"> | number
    title?: StringFilter<"OrderStage"> | string
    detail?: StringFilter<"OrderStage"> | string
    status?: StringFilter<"OrderStage"> | string
    doneAt?: DateTimeNullableFilter<"OrderStage"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderStageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    doneAt?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderStageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderStageWhereInput | OrderStageWhereInput[]
    OR?: OrderStageWhereInput[]
    NOT?: OrderStageWhereInput | OrderStageWhereInput[]
    createdAt?: DateTimeFilter<"OrderStage"> | Date | string
    updatedAt?: DateTimeFilter<"OrderStage"> | Date | string
    orderId?: StringFilter<"OrderStage"> | string
    sequence?: IntFilter<"OrderStage"> | number
    title?: StringFilter<"OrderStage"> | string
    detail?: StringFilter<"OrderStage"> | string
    status?: StringFilter<"OrderStage"> | string
    doneAt?: DateTimeNullableFilter<"OrderStage"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderStageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    doneAt?: SortOrderInput | SortOrder
    _count?: OrderStageCountOrderByAggregateInput
    _avg?: OrderStageAvgOrderByAggregateInput
    _max?: OrderStageMaxOrderByAggregateInput
    _min?: OrderStageMinOrderByAggregateInput
    _sum?: OrderStageSumOrderByAggregateInput
  }

  export type OrderStageScalarWhereWithAggregatesInput = {
    AND?: OrderStageScalarWhereWithAggregatesInput | OrderStageScalarWhereWithAggregatesInput[]
    OR?: OrderStageScalarWhereWithAggregatesInput[]
    NOT?: OrderStageScalarWhereWithAggregatesInput | OrderStageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderStage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderStage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderStage"> | Date | string
    orderId?: StringWithAggregatesFilter<"OrderStage"> | string
    sequence?: IntWithAggregatesFilter<"OrderStage"> | number
    title?: StringWithAggregatesFilter<"OrderStage"> | string
    detail?: StringWithAggregatesFilter<"OrderStage"> | string
    status?: StringWithAggregatesFilter<"OrderStage"> | string
    doneAt?: DateTimeNullableWithAggregatesFilter<"OrderStage"> | Date | string | null
  }

  export type UploadedFileWhereInput = {
    AND?: UploadedFileWhereInput | UploadedFileWhereInput[]
    OR?: UploadedFileWhereInput[]
    NOT?: UploadedFileWhereInput | UploadedFileWhereInput[]
    id?: StringFilter<"UploadedFile"> | string
    createdAt?: DateTimeFilter<"UploadedFile"> | Date | string
    ossUrl?: StringFilter<"UploadedFile"> | string
    mimeType?: StringFilter<"UploadedFile"> | string
    sizeBytes?: IntNullableFilter<"UploadedFile"> | number | null
    originalName?: StringNullableFilter<"UploadedFile"> | string | null
    sourceType?: StringFilter<"UploadedFile"> | string
    sourceId?: StringNullableFilter<"UploadedFile"> | string | null
  }

  export type UploadedFileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ossUrl?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    originalName?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
  }

  export type UploadedFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UploadedFileWhereInput | UploadedFileWhereInput[]
    OR?: UploadedFileWhereInput[]
    NOT?: UploadedFileWhereInput | UploadedFileWhereInput[]
    createdAt?: DateTimeFilter<"UploadedFile"> | Date | string
    ossUrl?: StringFilter<"UploadedFile"> | string
    mimeType?: StringFilter<"UploadedFile"> | string
    sizeBytes?: IntNullableFilter<"UploadedFile"> | number | null
    originalName?: StringNullableFilter<"UploadedFile"> | string | null
    sourceType?: StringFilter<"UploadedFile"> | string
    sourceId?: StringNullableFilter<"UploadedFile"> | string | null
  }, "id">

  export type UploadedFileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ossUrl?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    originalName?: SortOrderInput | SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    _count?: UploadedFileCountOrderByAggregateInput
    _avg?: UploadedFileAvgOrderByAggregateInput
    _max?: UploadedFileMaxOrderByAggregateInput
    _min?: UploadedFileMinOrderByAggregateInput
    _sum?: UploadedFileSumOrderByAggregateInput
  }

  export type UploadedFileScalarWhereWithAggregatesInput = {
    AND?: UploadedFileScalarWhereWithAggregatesInput | UploadedFileScalarWhereWithAggregatesInput[]
    OR?: UploadedFileScalarWhereWithAggregatesInput[]
    NOT?: UploadedFileScalarWhereWithAggregatesInput | UploadedFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadedFile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UploadedFile"> | Date | string
    ossUrl?: StringWithAggregatesFilter<"UploadedFile"> | string
    mimeType?: StringWithAggregatesFilter<"UploadedFile"> | string
    sizeBytes?: IntNullableWithAggregatesFilter<"UploadedFile"> | number | null
    originalName?: StringNullableWithAggregatesFilter<"UploadedFile"> | string | null
    sourceType?: StringWithAggregatesFilter<"UploadedFile"> | string
    sourceId?: StringNullableWithAggregatesFilter<"UploadedFile"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    orderMessages?: OrderMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    orderMessages?: OrderMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    orderMessages?: OrderMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    orderMessages?: OrderMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtisanCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
    artisanMatches?: ArtisanMatchCreateNestedManyWithoutArtisanInput
    orders?: OrderCreateNestedManyWithoutArtisanInput
    orderMessages?: OrderMessageCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
    artisanMatches?: ArtisanMatchUncheckedCreateNestedManyWithoutArtisanInput
    orders?: OrderUncheckedCreateNestedManyWithoutArtisanInput
    orderMessages?: OrderMessageUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    artisanMatches?: ArtisanMatchUpdateManyWithoutArtisanNestedInput
    orders?: OrderUpdateManyWithoutArtisanNestedInput
    orderMessages?: OrderMessageUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    artisanMatches?: ArtisanMatchUncheckedUpdateManyWithoutArtisanNestedInput
    orders?: OrderUncheckedUpdateManyWithoutArtisanNestedInput
    orderMessages?: OrderMessageUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
  }

  export type ArtisanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ArtisanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubmissionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
    user?: UserCreateNestedOneWithoutSubmissionsInput
    structuredRequirement?: StructuredRequirementCreateNestedOneWithoutSubmissionInput
    plan?: CraftPlanCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
    structuredRequirement?: StructuredRequirementUncheckedCreateNestedOneWithoutSubmissionInput
    plan?: CraftPlanUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutSubmissionsNestedInput
    structuredRequirement?: StructuredRequirementUpdateOneWithoutSubmissionNestedInput
    plan?: CraftPlanUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    structuredRequirement?: StructuredRequirementUncheckedUpdateOneWithoutSubmissionNestedInput
    plan?: CraftPlanUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type StructuredRequirementCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    style: string
    craftPreference: string
    materialPreference: string
    colorPreference: string
    budgetRange: string
    deliveryDate: string
    acceptableVariance: string
    acceptsModification?: boolean
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission: SubmissionCreateNestedOneWithoutStructuredRequirementInput
  }

  export type StructuredRequirementUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    category: string
    style: string
    craftPreference: string
    materialPreference: string
    colorPreference: string
    budgetRange: string
    deliveryDate: string
    acceptableVariance: string
    acceptsModification?: boolean
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StructuredRequirementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    craftPreference?: StringFieldUpdateOperationsInput | string
    materialPreference?: StringFieldUpdateOperationsInput | string
    colorPreference?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
    acceptableVariance?: StringFieldUpdateOperationsInput | string
    acceptsModification?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission?: SubmissionUpdateOneRequiredWithoutStructuredRequirementNestedInput
  }

  export type StructuredRequirementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    craftPreference?: StringFieldUpdateOperationsInput | string
    materialPreference?: StringFieldUpdateOperationsInput | string
    colorPreference?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
    acceptableVariance?: StringFieldUpdateOperationsInput | string
    acceptsModification?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StructuredRequirementCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    category: string
    style: string
    craftPreference: string
    materialPreference: string
    colorPreference: string
    budgetRange: string
    deliveryDate: string
    acceptableVariance: string
    acceptsModification?: boolean
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StructuredRequirementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    craftPreference?: StringFieldUpdateOperationsInput | string
    materialPreference?: StringFieldUpdateOperationsInput | string
    colorPreference?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
    acceptableVariance?: StringFieldUpdateOperationsInput | string
    acceptsModification?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StructuredRequirementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    craftPreference?: StringFieldUpdateOperationsInput | string
    materialPreference?: StringFieldUpdateOperationsInput | string
    colorPreference?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
    acceptableVariance?: StringFieldUpdateOperationsInput | string
    acceptsModification?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CraftPlanCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission: SubmissionCreateNestedOneWithoutPlanInput
    preview?: PreviewResultCreateNestedOneWithoutPlanInput
    artisanMatches?: ArtisanMatchCreateNestedManyWithoutPlanInput
    designConfirmation?: DesignConfirmationCreateNestedOneWithoutPlanInput
  }

  export type CraftPlanUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUncheckedCreateNestedOneWithoutPlanInput
    artisanMatches?: ArtisanMatchUncheckedCreateNestedManyWithoutPlanInput
    designConfirmation?: DesignConfirmationUncheckedCreateNestedOneWithoutPlanInput
  }

  export type CraftPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission?: SubmissionUpdateOneRequiredWithoutPlanNestedInput
    preview?: PreviewResultUpdateOneWithoutPlanNestedInput
    artisanMatches?: ArtisanMatchUpdateManyWithoutPlanNestedInput
    designConfirmation?: DesignConfirmationUpdateOneWithoutPlanNestedInput
  }

  export type CraftPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUncheckedUpdateOneWithoutPlanNestedInput
    artisanMatches?: ArtisanMatchUncheckedUpdateManyWithoutPlanNestedInput
    designConfirmation?: DesignConfirmationUncheckedUpdateOneWithoutPlanNestedInput
  }

  export type CraftPlanCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CraftPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CraftPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PreviewResultCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    sourceImages: JsonNullValueInput | InputJsonValue
    previewImages: JsonNullValueInput | InputJsonValue
    description: string
    status?: string
    plan: CraftPlanCreateNestedOneWithoutPreviewInput
  }

  export type PreviewResultUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    planId: string
    sourceImages: JsonNullValueInput | InputJsonValue
    previewImages: JsonNullValueInput | InputJsonValue
    description: string
    status?: string
  }

  export type PreviewResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    sourceImages?: JsonNullValueInput | InputJsonValue
    previewImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    plan?: CraftPlanUpdateOneRequiredWithoutPreviewNestedInput
  }

  export type PreviewResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    sourceImages?: JsonNullValueInput | InputJsonValue
    previewImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PreviewResultCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    planId: string
    sourceImages: JsonNullValueInput | InputJsonValue
    previewImages: JsonNullValueInput | InputJsonValue
    description: string
    status?: string
  }

  export type PreviewResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    sourceImages?: JsonNullValueInput | InputJsonValue
    previewImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PreviewResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    sourceImages?: JsonNullValueInput | InputJsonValue
    previewImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ArtisanMatchCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
    plan: CraftPlanCreateNestedOneWithoutArtisanMatchesInput
    artisan?: ArtisanCreateNestedOneWithoutArtisanMatchesInput
  }

  export type ArtisanMatchUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    planId: string
    artisanId?: string | null
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
  }

  export type ArtisanMatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    plan?: CraftPlanUpdateOneRequiredWithoutArtisanMatchesNestedInput
    artisan?: ArtisanUpdateOneWithoutArtisanMatchesNestedInput
  }

  export type ArtisanMatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type ArtisanMatchCreateManyInput = {
    id?: string
    createdAt?: Date | string
    planId: string
    artisanId?: string | null
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
  }

  export type ArtisanMatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type ArtisanMatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type DesignConfirmationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    title: string
    sections: JsonNullValueInput | InputJsonValue
    status?: string
    plan: CraftPlanCreateNestedOneWithoutDesignConfirmationInput
    order?: OrderCreateNestedOneWithoutDesignConfirmationInput
  }

  export type DesignConfirmationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    planId: string
    title: string
    sections: JsonNullValueInput | InputJsonValue
    status?: string
    order?: OrderUncheckedCreateNestedOneWithoutDesignConfirmationInput
  }

  export type DesignConfirmationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    plan?: CraftPlanUpdateOneRequiredWithoutDesignConfirmationNestedInput
    order?: OrderUpdateOneWithoutDesignConfirmationNestedInput
  }

  export type DesignConfirmationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    order?: OrderUncheckedUpdateOneWithoutDesignConfirmationNestedInput
  }

  export type DesignConfirmationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    planId: string
    title: string
    sections: JsonNullValueInput | InputJsonValue
    status?: string
  }

  export type DesignConfirmationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type DesignConfirmationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    user: UserCreateNestedOneWithoutOrdersInput
    artisan: ArtisanCreateNestedOneWithoutOrdersInput
    designConfirmation: DesignConfirmationCreateNestedOneWithoutOrderInput
    messages?: OrderMessageCreateNestedManyWithoutOrderInput
    stages?: OrderStageCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    artisanId: string
    submissionId: string
    designConfirmationId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    messages?: OrderMessageUncheckedCreateNestedManyWithoutOrderInput
    stages?: OrderStageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutOrdersNestedInput
    designConfirmation?: DesignConfirmationUpdateOneRequiredWithoutOrderNestedInput
    messages?: OrderMessageUpdateManyWithoutOrderNestedInput
    stages?: OrderStageUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    designConfirmationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: OrderMessageUncheckedUpdateManyWithoutOrderNestedInput
    stages?: OrderStageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    artisanId: string
    submissionId: string
    designConfirmationId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    designConfirmationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderMessageCreateInput = {
    id?: string
    createdAt?: Date | string
    senderType: string
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
    order: OrderCreateNestedOneWithoutMessagesInput
    user?: UserCreateNestedOneWithoutOrderMessagesInput
    artisan?: ArtisanCreateNestedOneWithoutOrderMessagesInput
  }

  export type OrderMessageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    senderType: string
    userId?: string | null
    artisanId?: string | null
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
    order?: OrderUpdateOneRequiredWithoutMessagesNestedInput
    user?: UserUpdateOneWithoutOrderMessagesNestedInput
    artisan?: ArtisanUpdateOneWithoutOrderMessagesNestedInput
  }

  export type OrderMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    senderType: string
    userId?: string | null
    artisanId?: string | null
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderStageCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sequence: number
    title: string
    detail: string
    status?: string
    doneAt?: Date | string | null
    order: OrderCreateNestedOneWithoutStagesInput
  }

  export type OrderStageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    sequence: number
    title: string
    detail: string
    status?: string
    doneAt?: Date | string | null
  }

  export type OrderStageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutStagesNestedInput
  }

  export type OrderStageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    sequence: number
    title: string
    detail: string
    status?: string
    doneAt?: Date | string | null
  }

  export type OrderStageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UploadedFileCreateInput = {
    id?: string
    createdAt?: Date | string
    ossUrl: string
    mimeType: string
    sizeBytes?: number | null
    originalName?: string | null
    sourceType: string
    sourceId?: string | null
  }

  export type UploadedFileUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    ossUrl: string
    mimeType: string
    sizeBytes?: number | null
    originalName?: string | null
    sourceType: string
    sourceId?: string | null
  }

  export type UploadedFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ossUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadedFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ossUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadedFileCreateManyInput = {
    id?: string
    createdAt?: Date | string
    ossUrl: string
    mimeType: string
    sizeBytes?: number | null
    originalName?: string | null
    sourceType: string
    sourceId?: string | null
  }

  export type UploadedFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ossUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UploadedFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ossUrl?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    sourceType?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderMessageListRelationFilter = {
    every?: OrderMessageWhereInput
    some?: OrderMessageWhereInput
    none?: OrderMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    sessionToken?: SortOrder
    sessionIssuedAt?: SortOrder
    nickname?: SortOrder
    avatarUrl?: SortOrder
    openid?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    sessionToken?: SortOrder
    sessionIssuedAt?: SortOrder
    nickname?: SortOrder
    avatarUrl?: SortOrder
    openid?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    sessionToken?: SortOrder
    sessionIssuedAt?: SortOrder
    nickname?: SortOrder
    avatarUrl?: SortOrder
    openid?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ArtisanMatchListRelationFilter = {
    every?: ArtisanMatchWhereInput
    some?: ArtisanMatchWhereInput
    none?: ArtisanMatchWhereInput
  }

  export type ArtisanMatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtisanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    craftTags?: SortOrder
    portfolio?: SortOrder
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    avgDays?: SortOrder
    verified?: SortOrder
    active?: SortOrder
  }

  export type ArtisanAvgOrderByAggregateInput = {
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    avgDays?: SortOrder
  }

  export type ArtisanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    avgDays?: SortOrder
    verified?: SortOrder
    active?: SortOrder
  }

  export type ArtisanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    avgDays?: SortOrder
    verified?: SortOrder
    active?: SortOrder
  }

  export type ArtisanSumOrderByAggregateInput = {
    priceRangeMin?: SortOrder
    priceRangeMax?: SortOrder
    avgDays?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StructuredRequirementNullableScalarRelationFilter = {
    is?: StructuredRequirementWhereInput | null
    isNot?: StructuredRequirementWhereInput | null
  }

  export type CraftPlanNullableScalarRelationFilter = {
    is?: CraftPlanWhereInput | null
    isNot?: CraftPlanWhereInput | null
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    images?: SortOrder
    requirementText?: SortOrder
    preferredCraft?: SortOrder
    budgetRange?: SortOrder
    expectedDeliveryDate?: SortOrder
    status?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    requirementText?: SortOrder
    preferredCraft?: SortOrder
    budgetRange?: SortOrder
    expectedDeliveryDate?: SortOrder
    status?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    requirementText?: SortOrder
    preferredCraft?: SortOrder
    budgetRange?: SortOrder
    expectedDeliveryDate?: SortOrder
    status?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type StructuredRequirementCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    category?: SortOrder
    style?: SortOrder
    craftPreference?: SortOrder
    materialPreference?: SortOrder
    colorPreference?: SortOrder
    budgetRange?: SortOrder
    deliveryDate?: SortOrder
    acceptableVariance?: SortOrder
    acceptsModification?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
    rawResponse?: SortOrder
  }

  export type StructuredRequirementMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    category?: SortOrder
    style?: SortOrder
    craftPreference?: SortOrder
    materialPreference?: SortOrder
    colorPreference?: SortOrder
    budgetRange?: SortOrder
    deliveryDate?: SortOrder
    acceptableVariance?: SortOrder
    acceptsModification?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
  }

  export type StructuredRequirementMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    category?: SortOrder
    style?: SortOrder
    craftPreference?: SortOrder
    materialPreference?: SortOrder
    colorPreference?: SortOrder
    budgetRange?: SortOrder
    deliveryDate?: SortOrder
    acceptableVariance?: SortOrder
    acceptsModification?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PreviewResultNullableScalarRelationFilter = {
    is?: PreviewResultWhereInput | null
    isNot?: PreviewResultWhereInput | null
  }

  export type DesignConfirmationNullableScalarRelationFilter = {
    is?: DesignConfirmationWhereInput | null
    isNot?: DesignConfirmationWhereInput | null
  }

  export type CraftPlanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    structuredRequirementId?: SortOrder
    recommendedCraft?: SortOrder
    recommendationReason?: SortOrder
    planSummary?: SortOrder
    riskNotes?: SortOrder
    timelineRange?: SortOrder
    priceRange?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
    rawResponse?: SortOrder
  }

  export type CraftPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    structuredRequirementId?: SortOrder
    recommendedCraft?: SortOrder
    recommendationReason?: SortOrder
    planSummary?: SortOrder
    timelineRange?: SortOrder
    priceRange?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
  }

  export type CraftPlanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    structuredRequirementId?: SortOrder
    recommendedCraft?: SortOrder
    recommendationReason?: SortOrder
    planSummary?: SortOrder
    timelineRange?: SortOrder
    priceRange?: SortOrder
    status?: SortOrder
    aiMode?: SortOrder
  }

  export type CraftPlanScalarRelationFilter = {
    is?: CraftPlanWhereInput
    isNot?: CraftPlanWhereInput
  }

  export type PreviewResultCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    sourceImages?: SortOrder
    previewImages?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type PreviewResultMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type PreviewResultMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type ArtisanNullableScalarRelationFilter = {
    is?: ArtisanWhereInput | null
    isNot?: ArtisanWhereInput | null
  }

  export type ArtisanMatchCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    artisanId?: SortOrder
    name?: SortOrder
    craftExpertise?: SortOrder
    priceRange?: SortOrder
    timelineRange?: SortOrder
    matchReason?: SortOrder
    rank?: SortOrder
  }

  export type ArtisanMatchAvgOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type ArtisanMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    artisanId?: SortOrder
    name?: SortOrder
    craftExpertise?: SortOrder
    priceRange?: SortOrder
    timelineRange?: SortOrder
    matchReason?: SortOrder
    rank?: SortOrder
  }

  export type ArtisanMatchMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    artisanId?: SortOrder
    name?: SortOrder
    craftExpertise?: SortOrder
    priceRange?: SortOrder
    timelineRange?: SortOrder
    matchReason?: SortOrder
    rank?: SortOrder
  }

  export type ArtisanMatchSumOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type DesignConfirmationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    sections?: SortOrder
    status?: SortOrder
  }

  export type DesignConfirmationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    status?: SortOrder
  }

  export type DesignConfirmationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    planId?: SortOrder
    title?: SortOrder
    status?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ArtisanScalarRelationFilter = {
    is?: ArtisanWhereInput
    isNot?: ArtisanWhereInput
  }

  export type DesignConfirmationScalarRelationFilter = {
    is?: DesignConfirmationWhereInput
    isNot?: DesignConfirmationWhereInput
  }

  export type OrderStageListRelationFilter = {
    every?: OrderStageWhereInput
    some?: OrderStageWhereInput
    none?: OrderStageWhereInput
  }

  export type OrderStageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    submissionId?: SortOrder
    designConfirmationId?: SortOrder
    status?: SortOrder
    totalPriceFen?: SortOrder
    agreedDeliveryDate?: SortOrder
    notes?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalPriceFen?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    submissionId?: SortOrder
    designConfirmationId?: SortOrder
    status?: SortOrder
    totalPriceFen?: SortOrder
    agreedDeliveryDate?: SortOrder
    notes?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    submissionId?: SortOrder
    designConfirmationId?: SortOrder
    status?: SortOrder
    totalPriceFen?: SortOrder
    agreedDeliveryDate?: SortOrder
    notes?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalPriceFen?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderMessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    senderType?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    content?: SortOrder
    attachments?: SortOrder
  }

  export type OrderMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    senderType?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    content?: SortOrder
  }

  export type OrderMessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    orderId?: SortOrder
    senderType?: SortOrder
    userId?: SortOrder
    artisanId?: SortOrder
    content?: SortOrder
  }

  export type OrderStageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    doneAt?: SortOrder
  }

  export type OrderStageAvgOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type OrderStageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    doneAt?: SortOrder
  }

  export type OrderStageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    sequence?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    status?: SortOrder
    doneAt?: SortOrder
  }

  export type OrderStageSumOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UploadedFileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ossUrl?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    originalName?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
  }

  export type UploadedFileAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type UploadedFileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ossUrl?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    originalName?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
  }

  export type UploadedFileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ossUrl?: SortOrder
    mimeType?: SortOrder
    sizeBytes?: SortOrder
    originalName?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
  }

  export type UploadedFileSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderMessageCreateWithoutUserInput, OrderMessageUncheckedCreateWithoutUserInput> | OrderMessageCreateWithoutUserInput[] | OrderMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutUserInput | OrderMessageCreateOrConnectWithoutUserInput[]
    createMany?: OrderMessageCreateManyUserInputEnvelope
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderMessageCreateWithoutUserInput, OrderMessageUncheckedCreateWithoutUserInput> | OrderMessageCreateWithoutUserInput[] | OrderMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutUserInput | OrderMessageCreateOrConnectWithoutUserInput[]
    createMany?: OrderMessageCreateManyUserInputEnvelope
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderMessageCreateWithoutUserInput, OrderMessageUncheckedCreateWithoutUserInput> | OrderMessageCreateWithoutUserInput[] | OrderMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutUserInput | OrderMessageCreateOrConnectWithoutUserInput[]
    upsert?: OrderMessageUpsertWithWhereUniqueWithoutUserInput | OrderMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderMessageCreateManyUserInputEnvelope
    set?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    disconnect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    delete?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    update?: OrderMessageUpdateWithWhereUniqueWithoutUserInput | OrderMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderMessageUpdateManyWithWhereWithoutUserInput | OrderMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderMessageScalarWhereInput | OrderMessageScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderMessageCreateWithoutUserInput, OrderMessageUncheckedCreateWithoutUserInput> | OrderMessageCreateWithoutUserInput[] | OrderMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutUserInput | OrderMessageCreateOrConnectWithoutUserInput[]
    upsert?: OrderMessageUpsertWithWhereUniqueWithoutUserInput | OrderMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderMessageCreateManyUserInputEnvelope
    set?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    disconnect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    delete?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    update?: OrderMessageUpdateWithWhereUniqueWithoutUserInput | OrderMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderMessageUpdateManyWithWhereWithoutUserInput | OrderMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderMessageScalarWhereInput | OrderMessageScalarWhereInput[]
  }

  export type ArtisanMatchCreateNestedManyWithoutArtisanInput = {
    create?: XOR<ArtisanMatchCreateWithoutArtisanInput, ArtisanMatchUncheckedCreateWithoutArtisanInput> | ArtisanMatchCreateWithoutArtisanInput[] | ArtisanMatchUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: ArtisanMatchCreateOrConnectWithoutArtisanInput | ArtisanMatchCreateOrConnectWithoutArtisanInput[]
    createMany?: ArtisanMatchCreateManyArtisanInputEnvelope
    connect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutArtisanInput = {
    create?: XOR<OrderCreateWithoutArtisanInput, OrderUncheckedCreateWithoutArtisanInput> | OrderCreateWithoutArtisanInput[] | OrderUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutArtisanInput | OrderCreateOrConnectWithoutArtisanInput[]
    createMany?: OrderCreateManyArtisanInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderMessageCreateNestedManyWithoutArtisanInput = {
    create?: XOR<OrderMessageCreateWithoutArtisanInput, OrderMessageUncheckedCreateWithoutArtisanInput> | OrderMessageCreateWithoutArtisanInput[] | OrderMessageUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutArtisanInput | OrderMessageCreateOrConnectWithoutArtisanInput[]
    createMany?: OrderMessageCreateManyArtisanInputEnvelope
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
  }

  export type ArtisanMatchUncheckedCreateNestedManyWithoutArtisanInput = {
    create?: XOR<ArtisanMatchCreateWithoutArtisanInput, ArtisanMatchUncheckedCreateWithoutArtisanInput> | ArtisanMatchCreateWithoutArtisanInput[] | ArtisanMatchUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: ArtisanMatchCreateOrConnectWithoutArtisanInput | ArtisanMatchCreateOrConnectWithoutArtisanInput[]
    createMany?: ArtisanMatchCreateManyArtisanInputEnvelope
    connect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutArtisanInput = {
    create?: XOR<OrderCreateWithoutArtisanInput, OrderUncheckedCreateWithoutArtisanInput> | OrderCreateWithoutArtisanInput[] | OrderUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutArtisanInput | OrderCreateOrConnectWithoutArtisanInput[]
    createMany?: OrderCreateManyArtisanInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderMessageUncheckedCreateNestedManyWithoutArtisanInput = {
    create?: XOR<OrderMessageCreateWithoutArtisanInput, OrderMessageUncheckedCreateWithoutArtisanInput> | OrderMessageCreateWithoutArtisanInput[] | OrderMessageUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutArtisanInput | OrderMessageCreateOrConnectWithoutArtisanInput[]
    createMany?: OrderMessageCreateManyArtisanInputEnvelope
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ArtisanMatchUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<ArtisanMatchCreateWithoutArtisanInput, ArtisanMatchUncheckedCreateWithoutArtisanInput> | ArtisanMatchCreateWithoutArtisanInput[] | ArtisanMatchUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: ArtisanMatchCreateOrConnectWithoutArtisanInput | ArtisanMatchCreateOrConnectWithoutArtisanInput[]
    upsert?: ArtisanMatchUpsertWithWhereUniqueWithoutArtisanInput | ArtisanMatchUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: ArtisanMatchCreateManyArtisanInputEnvelope
    set?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    disconnect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    delete?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    connect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    update?: ArtisanMatchUpdateWithWhereUniqueWithoutArtisanInput | ArtisanMatchUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: ArtisanMatchUpdateManyWithWhereWithoutArtisanInput | ArtisanMatchUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: ArtisanMatchScalarWhereInput | ArtisanMatchScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<OrderCreateWithoutArtisanInput, OrderUncheckedCreateWithoutArtisanInput> | OrderCreateWithoutArtisanInput[] | OrderUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutArtisanInput | OrderCreateOrConnectWithoutArtisanInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutArtisanInput | OrderUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: OrderCreateManyArtisanInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutArtisanInput | OrderUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutArtisanInput | OrderUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderMessageUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<OrderMessageCreateWithoutArtisanInput, OrderMessageUncheckedCreateWithoutArtisanInput> | OrderMessageCreateWithoutArtisanInput[] | OrderMessageUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutArtisanInput | OrderMessageCreateOrConnectWithoutArtisanInput[]
    upsert?: OrderMessageUpsertWithWhereUniqueWithoutArtisanInput | OrderMessageUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: OrderMessageCreateManyArtisanInputEnvelope
    set?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    disconnect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    delete?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    update?: OrderMessageUpdateWithWhereUniqueWithoutArtisanInput | OrderMessageUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: OrderMessageUpdateManyWithWhereWithoutArtisanInput | OrderMessageUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: OrderMessageScalarWhereInput | OrderMessageScalarWhereInput[]
  }

  export type ArtisanMatchUncheckedUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<ArtisanMatchCreateWithoutArtisanInput, ArtisanMatchUncheckedCreateWithoutArtisanInput> | ArtisanMatchCreateWithoutArtisanInput[] | ArtisanMatchUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: ArtisanMatchCreateOrConnectWithoutArtisanInput | ArtisanMatchCreateOrConnectWithoutArtisanInput[]
    upsert?: ArtisanMatchUpsertWithWhereUniqueWithoutArtisanInput | ArtisanMatchUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: ArtisanMatchCreateManyArtisanInputEnvelope
    set?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    disconnect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    delete?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    connect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    update?: ArtisanMatchUpdateWithWhereUniqueWithoutArtisanInput | ArtisanMatchUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: ArtisanMatchUpdateManyWithWhereWithoutArtisanInput | ArtisanMatchUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: ArtisanMatchScalarWhereInput | ArtisanMatchScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<OrderCreateWithoutArtisanInput, OrderUncheckedCreateWithoutArtisanInput> | OrderCreateWithoutArtisanInput[] | OrderUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutArtisanInput | OrderCreateOrConnectWithoutArtisanInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutArtisanInput | OrderUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: OrderCreateManyArtisanInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutArtisanInput | OrderUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutArtisanInput | OrderUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderMessageUncheckedUpdateManyWithoutArtisanNestedInput = {
    create?: XOR<OrderMessageCreateWithoutArtisanInput, OrderMessageUncheckedCreateWithoutArtisanInput> | OrderMessageCreateWithoutArtisanInput[] | OrderMessageUncheckedCreateWithoutArtisanInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutArtisanInput | OrderMessageCreateOrConnectWithoutArtisanInput[]
    upsert?: OrderMessageUpsertWithWhereUniqueWithoutArtisanInput | OrderMessageUpsertWithWhereUniqueWithoutArtisanInput[]
    createMany?: OrderMessageCreateManyArtisanInputEnvelope
    set?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    disconnect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    delete?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    update?: OrderMessageUpdateWithWhereUniqueWithoutArtisanInput | OrderMessageUpdateWithWhereUniqueWithoutArtisanInput[]
    updateMany?: OrderMessageUpdateManyWithWhereWithoutArtisanInput | OrderMessageUpdateManyWithWhereWithoutArtisanInput[]
    deleteMany?: OrderMessageScalarWhereInput | OrderMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type StructuredRequirementCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<StructuredRequirementCreateWithoutSubmissionInput, StructuredRequirementUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: StructuredRequirementCreateOrConnectWithoutSubmissionInput
    connect?: StructuredRequirementWhereUniqueInput
  }

  export type CraftPlanCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<CraftPlanCreateWithoutSubmissionInput, CraftPlanUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutSubmissionInput
    connect?: CraftPlanWhereUniqueInput
  }

  export type StructuredRequirementUncheckedCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<StructuredRequirementCreateWithoutSubmissionInput, StructuredRequirementUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: StructuredRequirementCreateOrConnectWithoutSubmissionInput
    connect?: StructuredRequirementWhereUniqueInput
  }

  export type CraftPlanUncheckedCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<CraftPlanCreateWithoutSubmissionInput, CraftPlanUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutSubmissionInput
    connect?: CraftPlanWhereUniqueInput
  }

  export type UserUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type StructuredRequirementUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<StructuredRequirementCreateWithoutSubmissionInput, StructuredRequirementUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: StructuredRequirementCreateOrConnectWithoutSubmissionInput
    upsert?: StructuredRequirementUpsertWithoutSubmissionInput
    disconnect?: StructuredRequirementWhereInput | boolean
    delete?: StructuredRequirementWhereInput | boolean
    connect?: StructuredRequirementWhereUniqueInput
    update?: XOR<XOR<StructuredRequirementUpdateToOneWithWhereWithoutSubmissionInput, StructuredRequirementUpdateWithoutSubmissionInput>, StructuredRequirementUncheckedUpdateWithoutSubmissionInput>
  }

  export type CraftPlanUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<CraftPlanCreateWithoutSubmissionInput, CraftPlanUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutSubmissionInput
    upsert?: CraftPlanUpsertWithoutSubmissionInput
    disconnect?: CraftPlanWhereInput | boolean
    delete?: CraftPlanWhereInput | boolean
    connect?: CraftPlanWhereUniqueInput
    update?: XOR<XOR<CraftPlanUpdateToOneWithWhereWithoutSubmissionInput, CraftPlanUpdateWithoutSubmissionInput>, CraftPlanUncheckedUpdateWithoutSubmissionInput>
  }

  export type StructuredRequirementUncheckedUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<StructuredRequirementCreateWithoutSubmissionInput, StructuredRequirementUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: StructuredRequirementCreateOrConnectWithoutSubmissionInput
    upsert?: StructuredRequirementUpsertWithoutSubmissionInput
    disconnect?: StructuredRequirementWhereInput | boolean
    delete?: StructuredRequirementWhereInput | boolean
    connect?: StructuredRequirementWhereUniqueInput
    update?: XOR<XOR<StructuredRequirementUpdateToOneWithWhereWithoutSubmissionInput, StructuredRequirementUpdateWithoutSubmissionInput>, StructuredRequirementUncheckedUpdateWithoutSubmissionInput>
  }

  export type CraftPlanUncheckedUpdateOneWithoutSubmissionNestedInput = {
    create?: XOR<CraftPlanCreateWithoutSubmissionInput, CraftPlanUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutSubmissionInput
    upsert?: CraftPlanUpsertWithoutSubmissionInput
    disconnect?: CraftPlanWhereInput | boolean
    delete?: CraftPlanWhereInput | boolean
    connect?: CraftPlanWhereUniqueInput
    update?: XOR<XOR<CraftPlanUpdateToOneWithWhereWithoutSubmissionInput, CraftPlanUpdateWithoutSubmissionInput>, CraftPlanUncheckedUpdateWithoutSubmissionInput>
  }

  export type SubmissionCreateNestedOneWithoutStructuredRequirementInput = {
    create?: XOR<SubmissionCreateWithoutStructuredRequirementInput, SubmissionUncheckedCreateWithoutStructuredRequirementInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutStructuredRequirementInput
    connect?: SubmissionWhereUniqueInput
  }

  export type SubmissionUpdateOneRequiredWithoutStructuredRequirementNestedInput = {
    create?: XOR<SubmissionCreateWithoutStructuredRequirementInput, SubmissionUncheckedCreateWithoutStructuredRequirementInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutStructuredRequirementInput
    upsert?: SubmissionUpsertWithoutStructuredRequirementInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutStructuredRequirementInput, SubmissionUpdateWithoutStructuredRequirementInput>, SubmissionUncheckedUpdateWithoutStructuredRequirementInput>
  }

  export type SubmissionCreateNestedOneWithoutPlanInput = {
    create?: XOR<SubmissionCreateWithoutPlanInput, SubmissionUncheckedCreateWithoutPlanInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutPlanInput
    connect?: SubmissionWhereUniqueInput
  }

  export type PreviewResultCreateNestedOneWithoutPlanInput = {
    create?: XOR<PreviewResultCreateWithoutPlanInput, PreviewResultUncheckedCreateWithoutPlanInput>
    connectOrCreate?: PreviewResultCreateOrConnectWithoutPlanInput
    connect?: PreviewResultWhereUniqueInput
  }

  export type ArtisanMatchCreateNestedManyWithoutPlanInput = {
    create?: XOR<ArtisanMatchCreateWithoutPlanInput, ArtisanMatchUncheckedCreateWithoutPlanInput> | ArtisanMatchCreateWithoutPlanInput[] | ArtisanMatchUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ArtisanMatchCreateOrConnectWithoutPlanInput | ArtisanMatchCreateOrConnectWithoutPlanInput[]
    createMany?: ArtisanMatchCreateManyPlanInputEnvelope
    connect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
  }

  export type DesignConfirmationCreateNestedOneWithoutPlanInput = {
    create?: XOR<DesignConfirmationCreateWithoutPlanInput, DesignConfirmationUncheckedCreateWithoutPlanInput>
    connectOrCreate?: DesignConfirmationCreateOrConnectWithoutPlanInput
    connect?: DesignConfirmationWhereUniqueInput
  }

  export type PreviewResultUncheckedCreateNestedOneWithoutPlanInput = {
    create?: XOR<PreviewResultCreateWithoutPlanInput, PreviewResultUncheckedCreateWithoutPlanInput>
    connectOrCreate?: PreviewResultCreateOrConnectWithoutPlanInput
    connect?: PreviewResultWhereUniqueInput
  }

  export type ArtisanMatchUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<ArtisanMatchCreateWithoutPlanInput, ArtisanMatchUncheckedCreateWithoutPlanInput> | ArtisanMatchCreateWithoutPlanInput[] | ArtisanMatchUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ArtisanMatchCreateOrConnectWithoutPlanInput | ArtisanMatchCreateOrConnectWithoutPlanInput[]
    createMany?: ArtisanMatchCreateManyPlanInputEnvelope
    connect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
  }

  export type DesignConfirmationUncheckedCreateNestedOneWithoutPlanInput = {
    create?: XOR<DesignConfirmationCreateWithoutPlanInput, DesignConfirmationUncheckedCreateWithoutPlanInput>
    connectOrCreate?: DesignConfirmationCreateOrConnectWithoutPlanInput
    connect?: DesignConfirmationWhereUniqueInput
  }

  export type SubmissionUpdateOneRequiredWithoutPlanNestedInput = {
    create?: XOR<SubmissionCreateWithoutPlanInput, SubmissionUncheckedCreateWithoutPlanInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutPlanInput
    upsert?: SubmissionUpsertWithoutPlanInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutPlanInput, SubmissionUpdateWithoutPlanInput>, SubmissionUncheckedUpdateWithoutPlanInput>
  }

  export type PreviewResultUpdateOneWithoutPlanNestedInput = {
    create?: XOR<PreviewResultCreateWithoutPlanInput, PreviewResultUncheckedCreateWithoutPlanInput>
    connectOrCreate?: PreviewResultCreateOrConnectWithoutPlanInput
    upsert?: PreviewResultUpsertWithoutPlanInput
    disconnect?: PreviewResultWhereInput | boolean
    delete?: PreviewResultWhereInput | boolean
    connect?: PreviewResultWhereUniqueInput
    update?: XOR<XOR<PreviewResultUpdateToOneWithWhereWithoutPlanInput, PreviewResultUpdateWithoutPlanInput>, PreviewResultUncheckedUpdateWithoutPlanInput>
  }

  export type ArtisanMatchUpdateManyWithoutPlanNestedInput = {
    create?: XOR<ArtisanMatchCreateWithoutPlanInput, ArtisanMatchUncheckedCreateWithoutPlanInput> | ArtisanMatchCreateWithoutPlanInput[] | ArtisanMatchUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ArtisanMatchCreateOrConnectWithoutPlanInput | ArtisanMatchCreateOrConnectWithoutPlanInput[]
    upsert?: ArtisanMatchUpsertWithWhereUniqueWithoutPlanInput | ArtisanMatchUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: ArtisanMatchCreateManyPlanInputEnvelope
    set?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    disconnect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    delete?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    connect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    update?: ArtisanMatchUpdateWithWhereUniqueWithoutPlanInput | ArtisanMatchUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: ArtisanMatchUpdateManyWithWhereWithoutPlanInput | ArtisanMatchUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: ArtisanMatchScalarWhereInput | ArtisanMatchScalarWhereInput[]
  }

  export type DesignConfirmationUpdateOneWithoutPlanNestedInput = {
    create?: XOR<DesignConfirmationCreateWithoutPlanInput, DesignConfirmationUncheckedCreateWithoutPlanInput>
    connectOrCreate?: DesignConfirmationCreateOrConnectWithoutPlanInput
    upsert?: DesignConfirmationUpsertWithoutPlanInput
    disconnect?: DesignConfirmationWhereInput | boolean
    delete?: DesignConfirmationWhereInput | boolean
    connect?: DesignConfirmationWhereUniqueInput
    update?: XOR<XOR<DesignConfirmationUpdateToOneWithWhereWithoutPlanInput, DesignConfirmationUpdateWithoutPlanInput>, DesignConfirmationUncheckedUpdateWithoutPlanInput>
  }

  export type PreviewResultUncheckedUpdateOneWithoutPlanNestedInput = {
    create?: XOR<PreviewResultCreateWithoutPlanInput, PreviewResultUncheckedCreateWithoutPlanInput>
    connectOrCreate?: PreviewResultCreateOrConnectWithoutPlanInput
    upsert?: PreviewResultUpsertWithoutPlanInput
    disconnect?: PreviewResultWhereInput | boolean
    delete?: PreviewResultWhereInput | boolean
    connect?: PreviewResultWhereUniqueInput
    update?: XOR<XOR<PreviewResultUpdateToOneWithWhereWithoutPlanInput, PreviewResultUpdateWithoutPlanInput>, PreviewResultUncheckedUpdateWithoutPlanInput>
  }

  export type ArtisanMatchUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<ArtisanMatchCreateWithoutPlanInput, ArtisanMatchUncheckedCreateWithoutPlanInput> | ArtisanMatchCreateWithoutPlanInput[] | ArtisanMatchUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ArtisanMatchCreateOrConnectWithoutPlanInput | ArtisanMatchCreateOrConnectWithoutPlanInput[]
    upsert?: ArtisanMatchUpsertWithWhereUniqueWithoutPlanInput | ArtisanMatchUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: ArtisanMatchCreateManyPlanInputEnvelope
    set?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    disconnect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    delete?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    connect?: ArtisanMatchWhereUniqueInput | ArtisanMatchWhereUniqueInput[]
    update?: ArtisanMatchUpdateWithWhereUniqueWithoutPlanInput | ArtisanMatchUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: ArtisanMatchUpdateManyWithWhereWithoutPlanInput | ArtisanMatchUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: ArtisanMatchScalarWhereInput | ArtisanMatchScalarWhereInput[]
  }

  export type DesignConfirmationUncheckedUpdateOneWithoutPlanNestedInput = {
    create?: XOR<DesignConfirmationCreateWithoutPlanInput, DesignConfirmationUncheckedCreateWithoutPlanInput>
    connectOrCreate?: DesignConfirmationCreateOrConnectWithoutPlanInput
    upsert?: DesignConfirmationUpsertWithoutPlanInput
    disconnect?: DesignConfirmationWhereInput | boolean
    delete?: DesignConfirmationWhereInput | boolean
    connect?: DesignConfirmationWhereUniqueInput
    update?: XOR<XOR<DesignConfirmationUpdateToOneWithWhereWithoutPlanInput, DesignConfirmationUpdateWithoutPlanInput>, DesignConfirmationUncheckedUpdateWithoutPlanInput>
  }

  export type CraftPlanCreateNestedOneWithoutPreviewInput = {
    create?: XOR<CraftPlanCreateWithoutPreviewInput, CraftPlanUncheckedCreateWithoutPreviewInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutPreviewInput
    connect?: CraftPlanWhereUniqueInput
  }

  export type CraftPlanUpdateOneRequiredWithoutPreviewNestedInput = {
    create?: XOR<CraftPlanCreateWithoutPreviewInput, CraftPlanUncheckedCreateWithoutPreviewInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutPreviewInput
    upsert?: CraftPlanUpsertWithoutPreviewInput
    connect?: CraftPlanWhereUniqueInput
    update?: XOR<XOR<CraftPlanUpdateToOneWithWhereWithoutPreviewInput, CraftPlanUpdateWithoutPreviewInput>, CraftPlanUncheckedUpdateWithoutPreviewInput>
  }

  export type CraftPlanCreateNestedOneWithoutArtisanMatchesInput = {
    create?: XOR<CraftPlanCreateWithoutArtisanMatchesInput, CraftPlanUncheckedCreateWithoutArtisanMatchesInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutArtisanMatchesInput
    connect?: CraftPlanWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutArtisanMatchesInput = {
    create?: XOR<ArtisanCreateWithoutArtisanMatchesInput, ArtisanUncheckedCreateWithoutArtisanMatchesInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutArtisanMatchesInput
    connect?: ArtisanWhereUniqueInput
  }

  export type CraftPlanUpdateOneRequiredWithoutArtisanMatchesNestedInput = {
    create?: XOR<CraftPlanCreateWithoutArtisanMatchesInput, CraftPlanUncheckedCreateWithoutArtisanMatchesInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutArtisanMatchesInput
    upsert?: CraftPlanUpsertWithoutArtisanMatchesInput
    connect?: CraftPlanWhereUniqueInput
    update?: XOR<XOR<CraftPlanUpdateToOneWithWhereWithoutArtisanMatchesInput, CraftPlanUpdateWithoutArtisanMatchesInput>, CraftPlanUncheckedUpdateWithoutArtisanMatchesInput>
  }

  export type ArtisanUpdateOneWithoutArtisanMatchesNestedInput = {
    create?: XOR<ArtisanCreateWithoutArtisanMatchesInput, ArtisanUncheckedCreateWithoutArtisanMatchesInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutArtisanMatchesInput
    upsert?: ArtisanUpsertWithoutArtisanMatchesInput
    disconnect?: ArtisanWhereInput | boolean
    delete?: ArtisanWhereInput | boolean
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutArtisanMatchesInput, ArtisanUpdateWithoutArtisanMatchesInput>, ArtisanUncheckedUpdateWithoutArtisanMatchesInput>
  }

  export type CraftPlanCreateNestedOneWithoutDesignConfirmationInput = {
    create?: XOR<CraftPlanCreateWithoutDesignConfirmationInput, CraftPlanUncheckedCreateWithoutDesignConfirmationInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutDesignConfirmationInput
    connect?: CraftPlanWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutDesignConfirmationInput = {
    create?: XOR<OrderCreateWithoutDesignConfirmationInput, OrderUncheckedCreateWithoutDesignConfirmationInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDesignConfirmationInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedOneWithoutDesignConfirmationInput = {
    create?: XOR<OrderCreateWithoutDesignConfirmationInput, OrderUncheckedCreateWithoutDesignConfirmationInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDesignConfirmationInput
    connect?: OrderWhereUniqueInput
  }

  export type CraftPlanUpdateOneRequiredWithoutDesignConfirmationNestedInput = {
    create?: XOR<CraftPlanCreateWithoutDesignConfirmationInput, CraftPlanUncheckedCreateWithoutDesignConfirmationInput>
    connectOrCreate?: CraftPlanCreateOrConnectWithoutDesignConfirmationInput
    upsert?: CraftPlanUpsertWithoutDesignConfirmationInput
    connect?: CraftPlanWhereUniqueInput
    update?: XOR<XOR<CraftPlanUpdateToOneWithWhereWithoutDesignConfirmationInput, CraftPlanUpdateWithoutDesignConfirmationInput>, CraftPlanUncheckedUpdateWithoutDesignConfirmationInput>
  }

  export type OrderUpdateOneWithoutDesignConfirmationNestedInput = {
    create?: XOR<OrderCreateWithoutDesignConfirmationInput, OrderUncheckedCreateWithoutDesignConfirmationInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDesignConfirmationInput
    upsert?: OrderUpsertWithoutDesignConfirmationInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDesignConfirmationInput, OrderUpdateWithoutDesignConfirmationInput>, OrderUncheckedUpdateWithoutDesignConfirmationInput>
  }

  export type OrderUncheckedUpdateOneWithoutDesignConfirmationNestedInput = {
    create?: XOR<OrderCreateWithoutDesignConfirmationInput, OrderUncheckedCreateWithoutDesignConfirmationInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDesignConfirmationInput
    upsert?: OrderUpsertWithoutDesignConfirmationInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDesignConfirmationInput, OrderUpdateWithoutDesignConfirmationInput>, OrderUncheckedUpdateWithoutDesignConfirmationInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ArtisanCreateWithoutOrdersInput, ArtisanUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutOrdersInput
    connect?: ArtisanWhereUniqueInput
  }

  export type DesignConfirmationCreateNestedOneWithoutOrderInput = {
    create?: XOR<DesignConfirmationCreateWithoutOrderInput, DesignConfirmationUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DesignConfirmationCreateOrConnectWithoutOrderInput
    connect?: DesignConfirmationWhereUniqueInput
  }

  export type OrderMessageCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderMessageCreateWithoutOrderInput, OrderMessageUncheckedCreateWithoutOrderInput> | OrderMessageCreateWithoutOrderInput[] | OrderMessageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutOrderInput | OrderMessageCreateOrConnectWithoutOrderInput[]
    createMany?: OrderMessageCreateManyOrderInputEnvelope
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
  }

  export type OrderStageCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderStageCreateWithoutOrderInput, OrderStageUncheckedCreateWithoutOrderInput> | OrderStageCreateWithoutOrderInput[] | OrderStageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStageCreateOrConnectWithoutOrderInput | OrderStageCreateOrConnectWithoutOrderInput[]
    createMany?: OrderStageCreateManyOrderInputEnvelope
    connect?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
  }

  export type OrderMessageUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderMessageCreateWithoutOrderInput, OrderMessageUncheckedCreateWithoutOrderInput> | OrderMessageCreateWithoutOrderInput[] | OrderMessageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutOrderInput | OrderMessageCreateOrConnectWithoutOrderInput[]
    createMany?: OrderMessageCreateManyOrderInputEnvelope
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
  }

  export type OrderStageUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderStageCreateWithoutOrderInput, OrderStageUncheckedCreateWithoutOrderInput> | OrderStageCreateWithoutOrderInput[] | OrderStageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStageCreateOrConnectWithoutOrderInput | OrderStageCreateOrConnectWithoutOrderInput[]
    createMany?: OrderStageCreateManyOrderInputEnvelope
    connect?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type ArtisanUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ArtisanCreateWithoutOrdersInput, ArtisanUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutOrdersInput
    upsert?: ArtisanUpsertWithoutOrdersInput
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutOrdersInput, ArtisanUpdateWithoutOrdersInput>, ArtisanUncheckedUpdateWithoutOrdersInput>
  }

  export type DesignConfirmationUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<DesignConfirmationCreateWithoutOrderInput, DesignConfirmationUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DesignConfirmationCreateOrConnectWithoutOrderInput
    upsert?: DesignConfirmationUpsertWithoutOrderInput
    connect?: DesignConfirmationWhereUniqueInput
    update?: XOR<XOR<DesignConfirmationUpdateToOneWithWhereWithoutOrderInput, DesignConfirmationUpdateWithoutOrderInput>, DesignConfirmationUncheckedUpdateWithoutOrderInput>
  }

  export type OrderMessageUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderMessageCreateWithoutOrderInput, OrderMessageUncheckedCreateWithoutOrderInput> | OrderMessageCreateWithoutOrderInput[] | OrderMessageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutOrderInput | OrderMessageCreateOrConnectWithoutOrderInput[]
    upsert?: OrderMessageUpsertWithWhereUniqueWithoutOrderInput | OrderMessageUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderMessageCreateManyOrderInputEnvelope
    set?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    disconnect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    delete?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    update?: OrderMessageUpdateWithWhereUniqueWithoutOrderInput | OrderMessageUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderMessageUpdateManyWithWhereWithoutOrderInput | OrderMessageUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderMessageScalarWhereInput | OrderMessageScalarWhereInput[]
  }

  export type OrderStageUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderStageCreateWithoutOrderInput, OrderStageUncheckedCreateWithoutOrderInput> | OrderStageCreateWithoutOrderInput[] | OrderStageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStageCreateOrConnectWithoutOrderInput | OrderStageCreateOrConnectWithoutOrderInput[]
    upsert?: OrderStageUpsertWithWhereUniqueWithoutOrderInput | OrderStageUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderStageCreateManyOrderInputEnvelope
    set?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
    disconnect?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
    delete?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
    connect?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
    update?: OrderStageUpdateWithWhereUniqueWithoutOrderInput | OrderStageUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderStageUpdateManyWithWhereWithoutOrderInput | OrderStageUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderStageScalarWhereInput | OrderStageScalarWhereInput[]
  }

  export type OrderMessageUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderMessageCreateWithoutOrderInput, OrderMessageUncheckedCreateWithoutOrderInput> | OrderMessageCreateWithoutOrderInput[] | OrderMessageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderMessageCreateOrConnectWithoutOrderInput | OrderMessageCreateOrConnectWithoutOrderInput[]
    upsert?: OrderMessageUpsertWithWhereUniqueWithoutOrderInput | OrderMessageUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderMessageCreateManyOrderInputEnvelope
    set?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    disconnect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    delete?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    connect?: OrderMessageWhereUniqueInput | OrderMessageWhereUniqueInput[]
    update?: OrderMessageUpdateWithWhereUniqueWithoutOrderInput | OrderMessageUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderMessageUpdateManyWithWhereWithoutOrderInput | OrderMessageUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderMessageScalarWhereInput | OrderMessageScalarWhereInput[]
  }

  export type OrderStageUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderStageCreateWithoutOrderInput, OrderStageUncheckedCreateWithoutOrderInput> | OrderStageCreateWithoutOrderInput[] | OrderStageUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderStageCreateOrConnectWithoutOrderInput | OrderStageCreateOrConnectWithoutOrderInput[]
    upsert?: OrderStageUpsertWithWhereUniqueWithoutOrderInput | OrderStageUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderStageCreateManyOrderInputEnvelope
    set?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
    disconnect?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
    delete?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
    connect?: OrderStageWhereUniqueInput | OrderStageWhereUniqueInput[]
    update?: OrderStageUpdateWithWhereUniqueWithoutOrderInput | OrderStageUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderStageUpdateManyWithWhereWithoutOrderInput | OrderStageUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderStageScalarWhereInput | OrderStageScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutMessagesInput = {
    create?: XOR<OrderCreateWithoutMessagesInput, OrderUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutMessagesInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrderMessagesInput = {
    create?: XOR<UserCreateWithoutOrderMessagesInput, UserUncheckedCreateWithoutOrderMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ArtisanCreateNestedOneWithoutOrderMessagesInput = {
    create?: XOR<ArtisanCreateWithoutOrderMessagesInput, ArtisanUncheckedCreateWithoutOrderMessagesInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutOrderMessagesInput
    connect?: ArtisanWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<OrderCreateWithoutMessagesInput, OrderUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutMessagesInput
    upsert?: OrderUpsertWithoutMessagesInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutMessagesInput, OrderUpdateWithoutMessagesInput>, OrderUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneWithoutOrderMessagesNestedInput = {
    create?: XOR<UserCreateWithoutOrderMessagesInput, UserUncheckedCreateWithoutOrderMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderMessagesInput
    upsert?: UserUpsertWithoutOrderMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderMessagesInput, UserUpdateWithoutOrderMessagesInput>, UserUncheckedUpdateWithoutOrderMessagesInput>
  }

  export type ArtisanUpdateOneWithoutOrderMessagesNestedInput = {
    create?: XOR<ArtisanCreateWithoutOrderMessagesInput, ArtisanUncheckedCreateWithoutOrderMessagesInput>
    connectOrCreate?: ArtisanCreateOrConnectWithoutOrderMessagesInput
    upsert?: ArtisanUpsertWithoutOrderMessagesInput
    disconnect?: ArtisanWhereInput | boolean
    delete?: ArtisanWhereInput | boolean
    connect?: ArtisanWhereUniqueInput
    update?: XOR<XOR<ArtisanUpdateToOneWithWhereWithoutOrderMessagesInput, ArtisanUpdateWithoutOrderMessagesInput>, ArtisanUncheckedUpdateWithoutOrderMessagesInput>
  }

  export type OrderCreateNestedOneWithoutStagesInput = {
    create?: XOR<OrderCreateWithoutStagesInput, OrderUncheckedCreateWithoutStagesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutStagesInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<OrderCreateWithoutStagesInput, OrderUncheckedCreateWithoutStagesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutStagesInput
    upsert?: OrderUpsertWithoutStagesInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutStagesInput, OrderUpdateWithoutStagesInput>, OrderUncheckedUpdateWithoutStagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
    structuredRequirement?: StructuredRequirementCreateNestedOneWithoutSubmissionInput
    plan?: CraftPlanCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
    structuredRequirement?: StructuredRequirementUncheckedCreateNestedOneWithoutSubmissionInput
    plan?: CraftPlanUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    artisan: ArtisanCreateNestedOneWithoutOrdersInput
    designConfirmation: DesignConfirmationCreateNestedOneWithoutOrderInput
    messages?: OrderMessageCreateNestedManyWithoutOrderInput
    stages?: OrderStageCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artisanId: string
    submissionId: string
    designConfirmationId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    messages?: OrderMessageUncheckedCreateNestedManyWithoutOrderInput
    stages?: OrderStageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderMessageCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    senderType: string
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
    order: OrderCreateNestedOneWithoutMessagesInput
    artisan?: ArtisanCreateNestedOneWithoutOrderMessagesInput
  }

  export type OrderMessageUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    senderType: string
    artisanId?: string | null
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageCreateOrConnectWithoutUserInput = {
    where: OrderMessageWhereUniqueInput
    create: XOR<OrderMessageCreateWithoutUserInput, OrderMessageUncheckedCreateWithoutUserInput>
  }

  export type OrderMessageCreateManyUserInputEnvelope = {
    data: OrderMessageCreateManyUserInput | OrderMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringNullableFilter<"Submission"> | string | null
    images?: JsonFilter<"Submission">
    requirementText?: StringFilter<"Submission"> | string
    preferredCraft?: StringFilter<"Submission"> | string
    budgetRange?: StringFilter<"Submission"> | string
    expectedDeliveryDate?: StringFilter<"Submission"> | string
    status?: StringFilter<"Submission"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: StringFilter<"Order"> | string
    artisanId?: StringFilter<"Order"> | string
    submissionId?: StringFilter<"Order"> | string
    designConfirmationId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    totalPriceFen?: IntFilter<"Order"> | number
    agreedDeliveryDate?: StringFilter<"Order"> | string
    notes?: StringNullableFilter<"Order"> | string | null
  }

  export type OrderMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderMessageWhereUniqueInput
    update: XOR<OrderMessageUpdateWithoutUserInput, OrderMessageUncheckedUpdateWithoutUserInput>
    create: XOR<OrderMessageCreateWithoutUserInput, OrderMessageUncheckedCreateWithoutUserInput>
  }

  export type OrderMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderMessageWhereUniqueInput
    data: XOR<OrderMessageUpdateWithoutUserInput, OrderMessageUncheckedUpdateWithoutUserInput>
  }

  export type OrderMessageUpdateManyWithWhereWithoutUserInput = {
    where: OrderMessageScalarWhereInput
    data: XOR<OrderMessageUpdateManyMutationInput, OrderMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderMessageScalarWhereInput = {
    AND?: OrderMessageScalarWhereInput | OrderMessageScalarWhereInput[]
    OR?: OrderMessageScalarWhereInput[]
    NOT?: OrderMessageScalarWhereInput | OrderMessageScalarWhereInput[]
    id?: StringFilter<"OrderMessage"> | string
    createdAt?: DateTimeFilter<"OrderMessage"> | Date | string
    orderId?: StringFilter<"OrderMessage"> | string
    senderType?: StringFilter<"OrderMessage"> | string
    userId?: StringNullableFilter<"OrderMessage"> | string | null
    artisanId?: StringNullableFilter<"OrderMessage"> | string | null
    content?: StringFilter<"OrderMessage"> | string
    attachments?: JsonFilter<"OrderMessage">
  }

  export type ArtisanMatchCreateWithoutArtisanInput = {
    id?: string
    createdAt?: Date | string
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
    plan: CraftPlanCreateNestedOneWithoutArtisanMatchesInput
  }

  export type ArtisanMatchUncheckedCreateWithoutArtisanInput = {
    id?: string
    createdAt?: Date | string
    planId: string
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
  }

  export type ArtisanMatchCreateOrConnectWithoutArtisanInput = {
    where: ArtisanMatchWhereUniqueInput
    create: XOR<ArtisanMatchCreateWithoutArtisanInput, ArtisanMatchUncheckedCreateWithoutArtisanInput>
  }

  export type ArtisanMatchCreateManyArtisanInputEnvelope = {
    data: ArtisanMatchCreateManyArtisanInput | ArtisanMatchCreateManyArtisanInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutArtisanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    user: UserCreateNestedOneWithoutOrdersInput
    designConfirmation: DesignConfirmationCreateNestedOneWithoutOrderInput
    messages?: OrderMessageCreateNestedManyWithoutOrderInput
    stages?: OrderStageCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutArtisanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    submissionId: string
    designConfirmationId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    messages?: OrderMessageUncheckedCreateNestedManyWithoutOrderInput
    stages?: OrderStageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutArtisanInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutArtisanInput, OrderUncheckedCreateWithoutArtisanInput>
  }

  export type OrderCreateManyArtisanInputEnvelope = {
    data: OrderCreateManyArtisanInput | OrderCreateManyArtisanInput[]
    skipDuplicates?: boolean
  }

  export type OrderMessageCreateWithoutArtisanInput = {
    id?: string
    createdAt?: Date | string
    senderType: string
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
    order: OrderCreateNestedOneWithoutMessagesInput
    user?: UserCreateNestedOneWithoutOrderMessagesInput
  }

  export type OrderMessageUncheckedCreateWithoutArtisanInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    senderType: string
    userId?: string | null
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageCreateOrConnectWithoutArtisanInput = {
    where: OrderMessageWhereUniqueInput
    create: XOR<OrderMessageCreateWithoutArtisanInput, OrderMessageUncheckedCreateWithoutArtisanInput>
  }

  export type OrderMessageCreateManyArtisanInputEnvelope = {
    data: OrderMessageCreateManyArtisanInput | OrderMessageCreateManyArtisanInput[]
    skipDuplicates?: boolean
  }

  export type ArtisanMatchUpsertWithWhereUniqueWithoutArtisanInput = {
    where: ArtisanMatchWhereUniqueInput
    update: XOR<ArtisanMatchUpdateWithoutArtisanInput, ArtisanMatchUncheckedUpdateWithoutArtisanInput>
    create: XOR<ArtisanMatchCreateWithoutArtisanInput, ArtisanMatchUncheckedCreateWithoutArtisanInput>
  }

  export type ArtisanMatchUpdateWithWhereUniqueWithoutArtisanInput = {
    where: ArtisanMatchWhereUniqueInput
    data: XOR<ArtisanMatchUpdateWithoutArtisanInput, ArtisanMatchUncheckedUpdateWithoutArtisanInput>
  }

  export type ArtisanMatchUpdateManyWithWhereWithoutArtisanInput = {
    where: ArtisanMatchScalarWhereInput
    data: XOR<ArtisanMatchUpdateManyMutationInput, ArtisanMatchUncheckedUpdateManyWithoutArtisanInput>
  }

  export type ArtisanMatchScalarWhereInput = {
    AND?: ArtisanMatchScalarWhereInput | ArtisanMatchScalarWhereInput[]
    OR?: ArtisanMatchScalarWhereInput[]
    NOT?: ArtisanMatchScalarWhereInput | ArtisanMatchScalarWhereInput[]
    id?: StringFilter<"ArtisanMatch"> | string
    createdAt?: DateTimeFilter<"ArtisanMatch"> | Date | string
    planId?: StringFilter<"ArtisanMatch"> | string
    artisanId?: StringNullableFilter<"ArtisanMatch"> | string | null
    name?: StringFilter<"ArtisanMatch"> | string
    craftExpertise?: StringFilter<"ArtisanMatch"> | string
    priceRange?: StringFilter<"ArtisanMatch"> | string
    timelineRange?: StringFilter<"ArtisanMatch"> | string
    matchReason?: StringFilter<"ArtisanMatch"> | string
    rank?: IntFilter<"ArtisanMatch"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutArtisanInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutArtisanInput, OrderUncheckedUpdateWithoutArtisanInput>
    create: XOR<OrderCreateWithoutArtisanInput, OrderUncheckedCreateWithoutArtisanInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutArtisanInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutArtisanInput, OrderUncheckedUpdateWithoutArtisanInput>
  }

  export type OrderUpdateManyWithWhereWithoutArtisanInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutArtisanInput>
  }

  export type OrderMessageUpsertWithWhereUniqueWithoutArtisanInput = {
    where: OrderMessageWhereUniqueInput
    update: XOR<OrderMessageUpdateWithoutArtisanInput, OrderMessageUncheckedUpdateWithoutArtisanInput>
    create: XOR<OrderMessageCreateWithoutArtisanInput, OrderMessageUncheckedCreateWithoutArtisanInput>
  }

  export type OrderMessageUpdateWithWhereUniqueWithoutArtisanInput = {
    where: OrderMessageWhereUniqueInput
    data: XOR<OrderMessageUpdateWithoutArtisanInput, OrderMessageUncheckedUpdateWithoutArtisanInput>
  }

  export type OrderMessageUpdateManyWithWhereWithoutArtisanInput = {
    where: OrderMessageScalarWhereInput
    data: XOR<OrderMessageUpdateManyMutationInput, OrderMessageUncheckedUpdateManyWithoutArtisanInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
    orders?: OrderCreateNestedManyWithoutUserInput
    orderMessages?: OrderMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    orderMessages?: OrderMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type StructuredRequirementCreateWithoutSubmissionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    style: string
    craftPreference: string
    materialPreference: string
    colorPreference: string
    budgetRange: string
    deliveryDate: string
    acceptableVariance: string
    acceptsModification?: boolean
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StructuredRequirementUncheckedCreateWithoutSubmissionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    style: string
    craftPreference: string
    materialPreference: string
    colorPreference: string
    budgetRange: string
    deliveryDate: string
    acceptableVariance: string
    acceptsModification?: boolean
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StructuredRequirementCreateOrConnectWithoutSubmissionInput = {
    where: StructuredRequirementWhereUniqueInput
    create: XOR<StructuredRequirementCreateWithoutSubmissionInput, StructuredRequirementUncheckedCreateWithoutSubmissionInput>
  }

  export type CraftPlanCreateWithoutSubmissionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultCreateNestedOneWithoutPlanInput
    artisanMatches?: ArtisanMatchCreateNestedManyWithoutPlanInput
    designConfirmation?: DesignConfirmationCreateNestedOneWithoutPlanInput
  }

  export type CraftPlanUncheckedCreateWithoutSubmissionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUncheckedCreateNestedOneWithoutPlanInput
    artisanMatches?: ArtisanMatchUncheckedCreateNestedManyWithoutPlanInput
    designConfirmation?: DesignConfirmationUncheckedCreateNestedOneWithoutPlanInput
  }

  export type CraftPlanCreateOrConnectWithoutSubmissionInput = {
    where: CraftPlanWhereUniqueInput
    create: XOR<CraftPlanCreateWithoutSubmissionInput, CraftPlanUncheckedCreateWithoutSubmissionInput>
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUpdateManyWithoutUserNestedInput
    orderMessages?: OrderMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    orderMessages?: OrderMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StructuredRequirementUpsertWithoutSubmissionInput = {
    update: XOR<StructuredRequirementUpdateWithoutSubmissionInput, StructuredRequirementUncheckedUpdateWithoutSubmissionInput>
    create: XOR<StructuredRequirementCreateWithoutSubmissionInput, StructuredRequirementUncheckedCreateWithoutSubmissionInput>
    where?: StructuredRequirementWhereInput
  }

  export type StructuredRequirementUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: StructuredRequirementWhereInput
    data: XOR<StructuredRequirementUpdateWithoutSubmissionInput, StructuredRequirementUncheckedUpdateWithoutSubmissionInput>
  }

  export type StructuredRequirementUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    craftPreference?: StringFieldUpdateOperationsInput | string
    materialPreference?: StringFieldUpdateOperationsInput | string
    colorPreference?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
    acceptableVariance?: StringFieldUpdateOperationsInput | string
    acceptsModification?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StructuredRequirementUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    craftPreference?: StringFieldUpdateOperationsInput | string
    materialPreference?: StringFieldUpdateOperationsInput | string
    colorPreference?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    deliveryDate?: StringFieldUpdateOperationsInput | string
    acceptableVariance?: StringFieldUpdateOperationsInput | string
    acceptsModification?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CraftPlanUpsertWithoutSubmissionInput = {
    update: XOR<CraftPlanUpdateWithoutSubmissionInput, CraftPlanUncheckedUpdateWithoutSubmissionInput>
    create: XOR<CraftPlanCreateWithoutSubmissionInput, CraftPlanUncheckedCreateWithoutSubmissionInput>
    where?: CraftPlanWhereInput
  }

  export type CraftPlanUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: CraftPlanWhereInput
    data: XOR<CraftPlanUpdateWithoutSubmissionInput, CraftPlanUncheckedUpdateWithoutSubmissionInput>
  }

  export type CraftPlanUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUpdateOneWithoutPlanNestedInput
    artisanMatches?: ArtisanMatchUpdateManyWithoutPlanNestedInput
    designConfirmation?: DesignConfirmationUpdateOneWithoutPlanNestedInput
  }

  export type CraftPlanUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUncheckedUpdateOneWithoutPlanNestedInput
    artisanMatches?: ArtisanMatchUncheckedUpdateManyWithoutPlanNestedInput
    designConfirmation?: DesignConfirmationUncheckedUpdateOneWithoutPlanNestedInput
  }

  export type SubmissionCreateWithoutStructuredRequirementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
    user?: UserCreateNestedOneWithoutSubmissionsInput
    plan?: CraftPlanCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutStructuredRequirementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
    plan?: CraftPlanUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutStructuredRequirementInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutStructuredRequirementInput, SubmissionUncheckedCreateWithoutStructuredRequirementInput>
  }

  export type SubmissionUpsertWithoutStructuredRequirementInput = {
    update: XOR<SubmissionUpdateWithoutStructuredRequirementInput, SubmissionUncheckedUpdateWithoutStructuredRequirementInput>
    create: XOR<SubmissionCreateWithoutStructuredRequirementInput, SubmissionUncheckedCreateWithoutStructuredRequirementInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutStructuredRequirementInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutStructuredRequirementInput, SubmissionUncheckedUpdateWithoutStructuredRequirementInput>
  }

  export type SubmissionUpdateWithoutStructuredRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutSubmissionsNestedInput
    plan?: CraftPlanUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutStructuredRequirementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    plan?: CraftPlanUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
    user?: UserCreateNestedOneWithoutSubmissionsInput
    structuredRequirement?: StructuredRequirementCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
    structuredRequirement?: StructuredRequirementUncheckedCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutPlanInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutPlanInput, SubmissionUncheckedCreateWithoutPlanInput>
  }

  export type PreviewResultCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    sourceImages: JsonNullValueInput | InputJsonValue
    previewImages: JsonNullValueInput | InputJsonValue
    description: string
    status?: string
  }

  export type PreviewResultUncheckedCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    sourceImages: JsonNullValueInput | InputJsonValue
    previewImages: JsonNullValueInput | InputJsonValue
    description: string
    status?: string
  }

  export type PreviewResultCreateOrConnectWithoutPlanInput = {
    where: PreviewResultWhereUniqueInput
    create: XOR<PreviewResultCreateWithoutPlanInput, PreviewResultUncheckedCreateWithoutPlanInput>
  }

  export type ArtisanMatchCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
    artisan?: ArtisanCreateNestedOneWithoutArtisanMatchesInput
  }

  export type ArtisanMatchUncheckedCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    artisanId?: string | null
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
  }

  export type ArtisanMatchCreateOrConnectWithoutPlanInput = {
    where: ArtisanMatchWhereUniqueInput
    create: XOR<ArtisanMatchCreateWithoutPlanInput, ArtisanMatchUncheckedCreateWithoutPlanInput>
  }

  export type ArtisanMatchCreateManyPlanInputEnvelope = {
    data: ArtisanMatchCreateManyPlanInput | ArtisanMatchCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type DesignConfirmationCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    title: string
    sections: JsonNullValueInput | InputJsonValue
    status?: string
    order?: OrderCreateNestedOneWithoutDesignConfirmationInput
  }

  export type DesignConfirmationUncheckedCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    title: string
    sections: JsonNullValueInput | InputJsonValue
    status?: string
    order?: OrderUncheckedCreateNestedOneWithoutDesignConfirmationInput
  }

  export type DesignConfirmationCreateOrConnectWithoutPlanInput = {
    where: DesignConfirmationWhereUniqueInput
    create: XOR<DesignConfirmationCreateWithoutPlanInput, DesignConfirmationUncheckedCreateWithoutPlanInput>
  }

  export type SubmissionUpsertWithoutPlanInput = {
    update: XOR<SubmissionUpdateWithoutPlanInput, SubmissionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubmissionCreateWithoutPlanInput, SubmissionUncheckedCreateWithoutPlanInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutPlanInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutPlanInput, SubmissionUncheckedUpdateWithoutPlanInput>
  }

  export type SubmissionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutSubmissionsNestedInput
    structuredRequirement?: StructuredRequirementUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    structuredRequirement?: StructuredRequirementUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type PreviewResultUpsertWithoutPlanInput = {
    update: XOR<PreviewResultUpdateWithoutPlanInput, PreviewResultUncheckedUpdateWithoutPlanInput>
    create: XOR<PreviewResultCreateWithoutPlanInput, PreviewResultUncheckedCreateWithoutPlanInput>
    where?: PreviewResultWhereInput
  }

  export type PreviewResultUpdateToOneWithWhereWithoutPlanInput = {
    where?: PreviewResultWhereInput
    data: XOR<PreviewResultUpdateWithoutPlanInput, PreviewResultUncheckedUpdateWithoutPlanInput>
  }

  export type PreviewResultUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    sourceImages?: JsonNullValueInput | InputJsonValue
    previewImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PreviewResultUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    sourceImages?: JsonNullValueInput | InputJsonValue
    previewImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ArtisanMatchUpsertWithWhereUniqueWithoutPlanInput = {
    where: ArtisanMatchWhereUniqueInput
    update: XOR<ArtisanMatchUpdateWithoutPlanInput, ArtisanMatchUncheckedUpdateWithoutPlanInput>
    create: XOR<ArtisanMatchCreateWithoutPlanInput, ArtisanMatchUncheckedCreateWithoutPlanInput>
  }

  export type ArtisanMatchUpdateWithWhereUniqueWithoutPlanInput = {
    where: ArtisanMatchWhereUniqueInput
    data: XOR<ArtisanMatchUpdateWithoutPlanInput, ArtisanMatchUncheckedUpdateWithoutPlanInput>
  }

  export type ArtisanMatchUpdateManyWithWhereWithoutPlanInput = {
    where: ArtisanMatchScalarWhereInput
    data: XOR<ArtisanMatchUpdateManyMutationInput, ArtisanMatchUncheckedUpdateManyWithoutPlanInput>
  }

  export type DesignConfirmationUpsertWithoutPlanInput = {
    update: XOR<DesignConfirmationUpdateWithoutPlanInput, DesignConfirmationUncheckedUpdateWithoutPlanInput>
    create: XOR<DesignConfirmationCreateWithoutPlanInput, DesignConfirmationUncheckedCreateWithoutPlanInput>
    where?: DesignConfirmationWhereInput
  }

  export type DesignConfirmationUpdateToOneWithWhereWithoutPlanInput = {
    where?: DesignConfirmationWhereInput
    data: XOR<DesignConfirmationUpdateWithoutPlanInput, DesignConfirmationUncheckedUpdateWithoutPlanInput>
  }

  export type DesignConfirmationUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneWithoutDesignConfirmationNestedInput
  }

  export type DesignConfirmationUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    order?: OrderUncheckedUpdateOneWithoutDesignConfirmationNestedInput
  }

  export type CraftPlanCreateWithoutPreviewInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission: SubmissionCreateNestedOneWithoutPlanInput
    artisanMatches?: ArtisanMatchCreateNestedManyWithoutPlanInput
    designConfirmation?: DesignConfirmationCreateNestedOneWithoutPlanInput
  }

  export type CraftPlanUncheckedCreateWithoutPreviewInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    artisanMatches?: ArtisanMatchUncheckedCreateNestedManyWithoutPlanInput
    designConfirmation?: DesignConfirmationUncheckedCreateNestedOneWithoutPlanInput
  }

  export type CraftPlanCreateOrConnectWithoutPreviewInput = {
    where: CraftPlanWhereUniqueInput
    create: XOR<CraftPlanCreateWithoutPreviewInput, CraftPlanUncheckedCreateWithoutPreviewInput>
  }

  export type CraftPlanUpsertWithoutPreviewInput = {
    update: XOR<CraftPlanUpdateWithoutPreviewInput, CraftPlanUncheckedUpdateWithoutPreviewInput>
    create: XOR<CraftPlanCreateWithoutPreviewInput, CraftPlanUncheckedCreateWithoutPreviewInput>
    where?: CraftPlanWhereInput
  }

  export type CraftPlanUpdateToOneWithWhereWithoutPreviewInput = {
    where?: CraftPlanWhereInput
    data: XOR<CraftPlanUpdateWithoutPreviewInput, CraftPlanUncheckedUpdateWithoutPreviewInput>
  }

  export type CraftPlanUpdateWithoutPreviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission?: SubmissionUpdateOneRequiredWithoutPlanNestedInput
    artisanMatches?: ArtisanMatchUpdateManyWithoutPlanNestedInput
    designConfirmation?: DesignConfirmationUpdateOneWithoutPlanNestedInput
  }

  export type CraftPlanUncheckedUpdateWithoutPreviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    artisanMatches?: ArtisanMatchUncheckedUpdateManyWithoutPlanNestedInput
    designConfirmation?: DesignConfirmationUncheckedUpdateOneWithoutPlanNestedInput
  }

  export type CraftPlanCreateWithoutArtisanMatchesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission: SubmissionCreateNestedOneWithoutPlanInput
    preview?: PreviewResultCreateNestedOneWithoutPlanInput
    designConfirmation?: DesignConfirmationCreateNestedOneWithoutPlanInput
  }

  export type CraftPlanUncheckedCreateWithoutArtisanMatchesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUncheckedCreateNestedOneWithoutPlanInput
    designConfirmation?: DesignConfirmationUncheckedCreateNestedOneWithoutPlanInput
  }

  export type CraftPlanCreateOrConnectWithoutArtisanMatchesInput = {
    where: CraftPlanWhereUniqueInput
    create: XOR<CraftPlanCreateWithoutArtisanMatchesInput, CraftPlanUncheckedCreateWithoutArtisanMatchesInput>
  }

  export type ArtisanCreateWithoutArtisanMatchesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
    orders?: OrderCreateNestedManyWithoutArtisanInput
    orderMessages?: OrderMessageCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutArtisanMatchesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
    orders?: OrderUncheckedCreateNestedManyWithoutArtisanInput
    orderMessages?: OrderMessageUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutArtisanMatchesInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutArtisanMatchesInput, ArtisanUncheckedCreateWithoutArtisanMatchesInput>
  }

  export type CraftPlanUpsertWithoutArtisanMatchesInput = {
    update: XOR<CraftPlanUpdateWithoutArtisanMatchesInput, CraftPlanUncheckedUpdateWithoutArtisanMatchesInput>
    create: XOR<CraftPlanCreateWithoutArtisanMatchesInput, CraftPlanUncheckedCreateWithoutArtisanMatchesInput>
    where?: CraftPlanWhereInput
  }

  export type CraftPlanUpdateToOneWithWhereWithoutArtisanMatchesInput = {
    where?: CraftPlanWhereInput
    data: XOR<CraftPlanUpdateWithoutArtisanMatchesInput, CraftPlanUncheckedUpdateWithoutArtisanMatchesInput>
  }

  export type CraftPlanUpdateWithoutArtisanMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission?: SubmissionUpdateOneRequiredWithoutPlanNestedInput
    preview?: PreviewResultUpdateOneWithoutPlanNestedInput
    designConfirmation?: DesignConfirmationUpdateOneWithoutPlanNestedInput
  }

  export type CraftPlanUncheckedUpdateWithoutArtisanMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUncheckedUpdateOneWithoutPlanNestedInput
    designConfirmation?: DesignConfirmationUncheckedUpdateOneWithoutPlanNestedInput
  }

  export type ArtisanUpsertWithoutArtisanMatchesInput = {
    update: XOR<ArtisanUpdateWithoutArtisanMatchesInput, ArtisanUncheckedUpdateWithoutArtisanMatchesInput>
    create: XOR<ArtisanCreateWithoutArtisanMatchesInput, ArtisanUncheckedCreateWithoutArtisanMatchesInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutArtisanMatchesInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutArtisanMatchesInput, ArtisanUncheckedUpdateWithoutArtisanMatchesInput>
  }

  export type ArtisanUpdateWithoutArtisanMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUpdateManyWithoutArtisanNestedInput
    orderMessages?: OrderMessageUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutArtisanMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: OrderUncheckedUpdateManyWithoutArtisanNestedInput
    orderMessages?: OrderMessageUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type CraftPlanCreateWithoutDesignConfirmationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission: SubmissionCreateNestedOneWithoutPlanInput
    preview?: PreviewResultCreateNestedOneWithoutPlanInput
    artisanMatches?: ArtisanMatchCreateNestedManyWithoutPlanInput
  }

  export type CraftPlanUncheckedCreateWithoutDesignConfirmationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    structuredRequirementId: string
    recommendedCraft: string
    recommendationReason: string
    planSummary: string
    riskNotes: JsonNullValueInput | InputJsonValue
    timelineRange: string
    priceRange: string
    status?: string
    aiMode?: string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUncheckedCreateNestedOneWithoutPlanInput
    artisanMatches?: ArtisanMatchUncheckedCreateNestedManyWithoutPlanInput
  }

  export type CraftPlanCreateOrConnectWithoutDesignConfirmationInput = {
    where: CraftPlanWhereUniqueInput
    create: XOR<CraftPlanCreateWithoutDesignConfirmationInput, CraftPlanUncheckedCreateWithoutDesignConfirmationInput>
  }

  export type OrderCreateWithoutDesignConfirmationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    user: UserCreateNestedOneWithoutOrdersInput
    artisan: ArtisanCreateNestedOneWithoutOrdersInput
    messages?: OrderMessageCreateNestedManyWithoutOrderInput
    stages?: OrderStageCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDesignConfirmationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    artisanId: string
    submissionId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    messages?: OrderMessageUncheckedCreateNestedManyWithoutOrderInput
    stages?: OrderStageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDesignConfirmationInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDesignConfirmationInput, OrderUncheckedCreateWithoutDesignConfirmationInput>
  }

  export type CraftPlanUpsertWithoutDesignConfirmationInput = {
    update: XOR<CraftPlanUpdateWithoutDesignConfirmationInput, CraftPlanUncheckedUpdateWithoutDesignConfirmationInput>
    create: XOR<CraftPlanCreateWithoutDesignConfirmationInput, CraftPlanUncheckedCreateWithoutDesignConfirmationInput>
    where?: CraftPlanWhereInput
  }

  export type CraftPlanUpdateToOneWithWhereWithoutDesignConfirmationInput = {
    where?: CraftPlanWhereInput
    data: XOR<CraftPlanUpdateWithoutDesignConfirmationInput, CraftPlanUncheckedUpdateWithoutDesignConfirmationInput>
  }

  export type CraftPlanUpdateWithoutDesignConfirmationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    submission?: SubmissionUpdateOneRequiredWithoutPlanNestedInput
    preview?: PreviewResultUpdateOneWithoutPlanNestedInput
    artisanMatches?: ArtisanMatchUpdateManyWithoutPlanNestedInput
  }

  export type CraftPlanUncheckedUpdateWithoutDesignConfirmationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    structuredRequirementId?: StringFieldUpdateOperationsInput | string
    recommendedCraft?: StringFieldUpdateOperationsInput | string
    recommendationReason?: StringFieldUpdateOperationsInput | string
    planSummary?: StringFieldUpdateOperationsInput | string
    riskNotes?: JsonNullValueInput | InputJsonValue
    timelineRange?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiMode?: StringFieldUpdateOperationsInput | string
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    preview?: PreviewResultUncheckedUpdateOneWithoutPlanNestedInput
    artisanMatches?: ArtisanMatchUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type OrderUpsertWithoutDesignConfirmationInput = {
    update: XOR<OrderUpdateWithoutDesignConfirmationInput, OrderUncheckedUpdateWithoutDesignConfirmationInput>
    create: XOR<OrderCreateWithoutDesignConfirmationInput, OrderUncheckedCreateWithoutDesignConfirmationInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDesignConfirmationInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDesignConfirmationInput, OrderUncheckedUpdateWithoutDesignConfirmationInput>
  }

  export type OrderUpdateWithoutDesignConfirmationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutOrdersNestedInput
    messages?: OrderMessageUpdateManyWithoutOrderNestedInput
    stages?: OrderStageUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDesignConfirmationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: OrderMessageUncheckedUpdateManyWithoutOrderNestedInput
    stages?: OrderStageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    orderMessages?: OrderMessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    orderMessages?: OrderMessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type ArtisanCreateWithoutOrdersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
    artisanMatches?: ArtisanMatchCreateNestedManyWithoutArtisanInput
    orderMessages?: OrderMessageCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutOrdersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
    artisanMatches?: ArtisanMatchUncheckedCreateNestedManyWithoutArtisanInput
    orderMessages?: OrderMessageUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutOrdersInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutOrdersInput, ArtisanUncheckedCreateWithoutOrdersInput>
  }

  export type DesignConfirmationCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    title: string
    sections: JsonNullValueInput | InputJsonValue
    status?: string
    plan: CraftPlanCreateNestedOneWithoutDesignConfirmationInput
  }

  export type DesignConfirmationUncheckedCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    planId: string
    title: string
    sections: JsonNullValueInput | InputJsonValue
    status?: string
  }

  export type DesignConfirmationCreateOrConnectWithoutOrderInput = {
    where: DesignConfirmationWhereUniqueInput
    create: XOR<DesignConfirmationCreateWithoutOrderInput, DesignConfirmationUncheckedCreateWithoutOrderInput>
  }

  export type OrderMessageCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    senderType: string
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
    user?: UserCreateNestedOneWithoutOrderMessagesInput
    artisan?: ArtisanCreateNestedOneWithoutOrderMessagesInput
  }

  export type OrderMessageUncheckedCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    senderType: string
    userId?: string | null
    artisanId?: string | null
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageCreateOrConnectWithoutOrderInput = {
    where: OrderMessageWhereUniqueInput
    create: XOR<OrderMessageCreateWithoutOrderInput, OrderMessageUncheckedCreateWithoutOrderInput>
  }

  export type OrderMessageCreateManyOrderInputEnvelope = {
    data: OrderMessageCreateManyOrderInput | OrderMessageCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderStageCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sequence: number
    title: string
    detail: string
    status?: string
    doneAt?: Date | string | null
  }

  export type OrderStageUncheckedCreateWithoutOrderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sequence: number
    title: string
    detail: string
    status?: string
    doneAt?: Date | string | null
  }

  export type OrderStageCreateOrConnectWithoutOrderInput = {
    where: OrderStageWhereUniqueInput
    create: XOR<OrderStageCreateWithoutOrderInput, OrderStageUncheckedCreateWithoutOrderInput>
  }

  export type OrderStageCreateManyOrderInputEnvelope = {
    data: OrderStageCreateManyOrderInput | OrderStageCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    orderMessages?: OrderMessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    orderMessages?: OrderMessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArtisanUpsertWithoutOrdersInput = {
    update: XOR<ArtisanUpdateWithoutOrdersInput, ArtisanUncheckedUpdateWithoutOrdersInput>
    create: XOR<ArtisanCreateWithoutOrdersInput, ArtisanUncheckedCreateWithoutOrdersInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutOrdersInput, ArtisanUncheckedUpdateWithoutOrdersInput>
  }

  export type ArtisanUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    artisanMatches?: ArtisanMatchUpdateManyWithoutArtisanNestedInput
    orderMessages?: OrderMessageUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    artisanMatches?: ArtisanMatchUncheckedUpdateManyWithoutArtisanNestedInput
    orderMessages?: OrderMessageUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type DesignConfirmationUpsertWithoutOrderInput = {
    update: XOR<DesignConfirmationUpdateWithoutOrderInput, DesignConfirmationUncheckedUpdateWithoutOrderInput>
    create: XOR<DesignConfirmationCreateWithoutOrderInput, DesignConfirmationUncheckedCreateWithoutOrderInput>
    where?: DesignConfirmationWhereInput
  }

  export type DesignConfirmationUpdateToOneWithWhereWithoutOrderInput = {
    where?: DesignConfirmationWhereInput
    data: XOR<DesignConfirmationUpdateWithoutOrderInput, DesignConfirmationUncheckedUpdateWithoutOrderInput>
  }

  export type DesignConfirmationUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    plan?: CraftPlanUpdateOneRequiredWithoutDesignConfirmationNestedInput
  }

  export type DesignConfirmationUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sections?: JsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderMessageUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderMessageWhereUniqueInput
    update: XOR<OrderMessageUpdateWithoutOrderInput, OrderMessageUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderMessageCreateWithoutOrderInput, OrderMessageUncheckedCreateWithoutOrderInput>
  }

  export type OrderMessageUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderMessageWhereUniqueInput
    data: XOR<OrderMessageUpdateWithoutOrderInput, OrderMessageUncheckedUpdateWithoutOrderInput>
  }

  export type OrderMessageUpdateManyWithWhereWithoutOrderInput = {
    where: OrderMessageScalarWhereInput
    data: XOR<OrderMessageUpdateManyMutationInput, OrderMessageUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderStageUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderStageWhereUniqueInput
    update: XOR<OrderStageUpdateWithoutOrderInput, OrderStageUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderStageCreateWithoutOrderInput, OrderStageUncheckedCreateWithoutOrderInput>
  }

  export type OrderStageUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderStageWhereUniqueInput
    data: XOR<OrderStageUpdateWithoutOrderInput, OrderStageUncheckedUpdateWithoutOrderInput>
  }

  export type OrderStageUpdateManyWithWhereWithoutOrderInput = {
    where: OrderStageScalarWhereInput
    data: XOR<OrderStageUpdateManyMutationInput, OrderStageUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderStageScalarWhereInput = {
    AND?: OrderStageScalarWhereInput | OrderStageScalarWhereInput[]
    OR?: OrderStageScalarWhereInput[]
    NOT?: OrderStageScalarWhereInput | OrderStageScalarWhereInput[]
    id?: StringFilter<"OrderStage"> | string
    createdAt?: DateTimeFilter<"OrderStage"> | Date | string
    updatedAt?: DateTimeFilter<"OrderStage"> | Date | string
    orderId?: StringFilter<"OrderStage"> | string
    sequence?: IntFilter<"OrderStage"> | number
    title?: StringFilter<"OrderStage"> | string
    detail?: StringFilter<"OrderStage"> | string
    status?: StringFilter<"OrderStage"> | string
    doneAt?: DateTimeNullableFilter<"OrderStage"> | Date | string | null
  }

  export type OrderCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    user: UserCreateNestedOneWithoutOrdersInput
    artisan: ArtisanCreateNestedOneWithoutOrdersInput
    designConfirmation: DesignConfirmationCreateNestedOneWithoutOrderInput
    stages?: OrderStageCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    artisanId: string
    submissionId: string
    designConfirmationId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    stages?: OrderStageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutMessagesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutMessagesInput, OrderUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutOrderMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    phone?: string | null
    passwordHash?: string | null
    sessionToken?: string | null
    sessionIssuedAt?: Date | string | null
    nickname?: string | null
    avatarUrl?: string | null
    openid?: string | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderMessagesInput, UserUncheckedCreateWithoutOrderMessagesInput>
  }

  export type ArtisanCreateWithoutOrderMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
    artisanMatches?: ArtisanMatchCreateNestedManyWithoutArtisanInput
    orders?: OrderCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanUncheckedCreateWithoutOrderMessagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    bio?: string | null
    avatarUrl?: string | null
    craftTags: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin: number
    priceRangeMax: number
    avgDays: number
    verified?: boolean
    active?: boolean
    artisanMatches?: ArtisanMatchUncheckedCreateNestedManyWithoutArtisanInput
    orders?: OrderUncheckedCreateNestedManyWithoutArtisanInput
  }

  export type ArtisanCreateOrConnectWithoutOrderMessagesInput = {
    where: ArtisanWhereUniqueInput
    create: XOR<ArtisanCreateWithoutOrderMessagesInput, ArtisanUncheckedCreateWithoutOrderMessagesInput>
  }

  export type OrderUpsertWithoutMessagesInput = {
    update: XOR<OrderUpdateWithoutMessagesInput, OrderUncheckedUpdateWithoutMessagesInput>
    create: XOR<OrderCreateWithoutMessagesInput, OrderUncheckedCreateWithoutMessagesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutMessagesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutMessagesInput, OrderUncheckedUpdateWithoutMessagesInput>
  }

  export type OrderUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutOrdersNestedInput
    designConfirmation?: DesignConfirmationUpdateOneRequiredWithoutOrderNestedInput
    stages?: OrderStageUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    designConfirmationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    stages?: OrderStageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserUpsertWithoutOrderMessagesInput = {
    update: XOR<UserUpdateWithoutOrderMessagesInput, UserUncheckedUpdateWithoutOrderMessagesInput>
    create: XOR<UserCreateWithoutOrderMessagesInput, UserUncheckedCreateWithoutOrderMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderMessagesInput, UserUncheckedUpdateWithoutOrderMessagesInput>
  }

  export type UserUpdateWithoutOrderMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    sessionIssuedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    openid?: NullableStringFieldUpdateOperationsInput | string | null
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArtisanUpsertWithoutOrderMessagesInput = {
    update: XOR<ArtisanUpdateWithoutOrderMessagesInput, ArtisanUncheckedUpdateWithoutOrderMessagesInput>
    create: XOR<ArtisanCreateWithoutOrderMessagesInput, ArtisanUncheckedCreateWithoutOrderMessagesInput>
    where?: ArtisanWhereInput
  }

  export type ArtisanUpdateToOneWithWhereWithoutOrderMessagesInput = {
    where?: ArtisanWhereInput
    data: XOR<ArtisanUpdateWithoutOrderMessagesInput, ArtisanUncheckedUpdateWithoutOrderMessagesInput>
  }

  export type ArtisanUpdateWithoutOrderMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    artisanMatches?: ArtisanMatchUpdateManyWithoutArtisanNestedInput
    orders?: OrderUpdateManyWithoutArtisanNestedInput
  }

  export type ArtisanUncheckedUpdateWithoutOrderMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    craftTags?: JsonNullValueInput | InputJsonValue
    portfolio?: JsonNullValueInput | InputJsonValue
    priceRangeMin?: IntFieldUpdateOperationsInput | number
    priceRangeMax?: IntFieldUpdateOperationsInput | number
    avgDays?: IntFieldUpdateOperationsInput | number
    verified?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    artisanMatches?: ArtisanMatchUncheckedUpdateManyWithoutArtisanNestedInput
    orders?: OrderUncheckedUpdateManyWithoutArtisanNestedInput
  }

  export type OrderCreateWithoutStagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    user: UserCreateNestedOneWithoutOrdersInput
    artisan: ArtisanCreateNestedOneWithoutOrdersInput
    designConfirmation: DesignConfirmationCreateNestedOneWithoutOrderInput
    messages?: OrderMessageCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutStagesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    artisanId: string
    submissionId: string
    designConfirmationId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
    messages?: OrderMessageUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutStagesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutStagesInput, OrderUncheckedCreateWithoutStagesInput>
  }

  export type OrderUpsertWithoutStagesInput = {
    update: XOR<OrderUpdateWithoutStagesInput, OrderUncheckedUpdateWithoutStagesInput>
    create: XOR<OrderCreateWithoutStagesInput, OrderUncheckedCreateWithoutStagesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutStagesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutStagesInput, OrderUncheckedUpdateWithoutStagesInput>
  }

  export type OrderUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    artisan?: ArtisanUpdateOneRequiredWithoutOrdersNestedInput
    designConfirmation?: DesignConfirmationUpdateOneRequiredWithoutOrderNestedInput
    messages?: OrderMessageUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    artisanId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    designConfirmationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: OrderMessageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images: JsonNullValueInput | InputJsonValue
    requirementText: string
    preferredCraft: string
    budgetRange: string
    expectedDeliveryDate: string
    status?: string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    artisanId: string
    submissionId: string
    designConfirmationId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
  }

  export type OrderMessageCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    senderType: string
    artisanId?: string | null
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    structuredRequirement?: StructuredRequirementUpdateOneWithoutSubmissionNestedInput
    plan?: CraftPlanUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    structuredRequirement?: StructuredRequirementUncheckedUpdateOneWithoutSubmissionNestedInput
    plan?: CraftPlanUncheckedUpdateOneWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: JsonNullValueInput | InputJsonValue
    requirementText?: StringFieldUpdateOperationsInput | string
    preferredCraft?: StringFieldUpdateOperationsInput | string
    budgetRange?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    artisan?: ArtisanUpdateOneRequiredWithoutOrdersNestedInput
    designConfirmation?: DesignConfirmationUpdateOneRequiredWithoutOrderNestedInput
    messages?: OrderMessageUpdateManyWithoutOrderNestedInput
    stages?: OrderStageUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisanId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    designConfirmationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: OrderMessageUncheckedUpdateManyWithoutOrderNestedInput
    stages?: OrderStageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisanId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    designConfirmationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderMessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
    order?: OrderUpdateOneRequiredWithoutMessagesNestedInput
    artisan?: ArtisanUpdateOneWithoutOrderMessagesNestedInput
  }

  export type OrderMessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type ArtisanMatchCreateManyArtisanInput = {
    id?: string
    createdAt?: Date | string
    planId: string
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
  }

  export type OrderCreateManyArtisanInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    submissionId: string
    designConfirmationId: string
    status?: string
    totalPriceFen: number
    agreedDeliveryDate: string
    notes?: string | null
  }

  export type OrderMessageCreateManyArtisanInput = {
    id?: string
    createdAt?: Date | string
    orderId: string
    senderType: string
    userId?: string | null
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type ArtisanMatchUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    plan?: CraftPlanUpdateOneRequiredWithoutArtisanMatchesNestedInput
  }

  export type ArtisanMatchUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type ArtisanMatchUncheckedUpdateManyWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    designConfirmation?: DesignConfirmationUpdateOneRequiredWithoutOrderNestedInput
    messages?: OrderMessageUpdateManyWithoutOrderNestedInput
    stages?: OrderStageUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    designConfirmationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: OrderMessageUncheckedUpdateManyWithoutOrderNestedInput
    stages?: OrderStageUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    designConfirmationId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalPriceFen?: IntFieldUpdateOperationsInput | number
    agreedDeliveryDate?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderMessageUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
    order?: OrderUpdateOneRequiredWithoutMessagesNestedInput
    user?: UserUpdateOneWithoutOrderMessagesNestedInput
  }

  export type OrderMessageUncheckedUpdateWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageUncheckedUpdateManyWithoutArtisanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    senderType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type ArtisanMatchCreateManyPlanInput = {
    id?: string
    createdAt?: Date | string
    artisanId?: string | null
    name: string
    craftExpertise: string
    priceRange: string
    timelineRange: string
    matchReason: string
    rank?: number
  }

  export type ArtisanMatchUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    artisan?: ArtisanUpdateOneWithoutArtisanMatchesNestedInput
  }

  export type ArtisanMatchUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type ArtisanMatchUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    craftExpertise?: StringFieldUpdateOperationsInput | string
    priceRange?: StringFieldUpdateOperationsInput | string
    timelineRange?: StringFieldUpdateOperationsInput | string
    matchReason?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
  }

  export type OrderMessageCreateManyOrderInput = {
    id?: string
    createdAt?: Date | string
    senderType: string
    userId?: string | null
    artisanId?: string | null
    content: string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderStageCreateManyOrderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sequence: number
    title: string
    detail: string
    status?: string
    doneAt?: Date | string | null
  }

  export type OrderMessageUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderType?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneWithoutOrderMessagesNestedInput
    artisan?: ArtisanUpdateOneWithoutOrderMessagesNestedInput
  }

  export type OrderMessageUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderMessageUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderType?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    artisanId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    attachments?: JsonNullValueInput | InputJsonValue
  }

  export type OrderStageUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStageUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderStageUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sequence?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    doneAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}